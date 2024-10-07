import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Root = () => {
  const location = useLocation();

  // Hide header/footer for both login and signup pages
  const noHeaderFooter =
    location.pathname.includes("login") ||
    location.pathname.includes("sign-up");

  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
