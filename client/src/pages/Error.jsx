import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
function Error() {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="error" />
          <h3>Oh! Page not found</h3>
          <p>We can&apos;t seem to find the page you are looking for </p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h3>Something went wrong</h3>
      <Link to="/dashboard">Go back to home</Link>
    </Wrapper>
  );
}

export default Error;
