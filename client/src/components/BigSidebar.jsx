import { Navlinks } from ".";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "./Logo";

function BigSidebar() {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className={`sidebar-container ${showSidebar ? "" : "show-sidebar"}`}>
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks bigSidebar />
        </div>
      </div>
    </Wrapper>
  );
}

export default BigSidebar;
