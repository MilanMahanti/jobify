import { Outlet, redirect, useNavigate, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, Loading, Navbar, SmallSidebar } from "../components";
import { createContext, useContext, useEffect, useState } from "react";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await customFetch("/auth/current-user");
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect("/");
  }
};

const DashboardContext = createContext();

function DashboardLayout({ isDarkThemeEnabled, queryClient }) {
  const { user } = useQuery(userQuery).data;
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
  const navigate = useNavigate();
  const navigation = useNavigation();
  const loading = navigation.state === "loading";
  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setIsDarkTheme(newDarkTheme);
    document.body.classList.toggle("dark-theme", newDarkTheme);
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    try {
      navigate("/");
      await customFetch.get("/auth/logout");
      queryClient.invalidateQueries();
      toast.success("Logged out successfully");
    } catch (error) {
      return error;
    }
  };
  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );
  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
    // eslint-disable-next-line
  }, [isAuthError]);
  return (
    <DashboardContext.Provider
      value={{
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
        user,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              {loading ? <Loading /> : <Outlet context={{ user }} />}
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
}

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
