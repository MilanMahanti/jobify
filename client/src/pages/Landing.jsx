import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

function Landing() {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Welcome to Jobify, your all-in-one solution for effortless job
            tracking and career management. Streamline your job search with our
            intuitive platform, offering features such as a personalized
            profile, real-time job search, application tracker, and integrated
            calendar to organize interviews and deadlines.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn ">
            Login/Demo user
          </Link>
        </div>
        <img src={main} className="img main-img" alt="hero" />
      </div>
    </Wrapper>
  );
}

export default Landing;
