import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer";
import Navbar from "../pages/Shared/Navbar";

const Root = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");

  console.log(location);
  return (
    <div>
      {noHeaderFooter || <Navbar />}
      <Outlet />
      {noHeaderFooter || <Footer />}
    </div>
  );
};

export default Root;
