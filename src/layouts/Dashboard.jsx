import {
  FaAddressCard,
  FaCalendar,
  FaHome,
  FaList,
  FaMenorah,
  FaShoppingBasket,
  FaShoppingCart,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { MdContactMail, MdOutlinePayment } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-orange-800 ">
        <ul className="menu gap-3">
          <li>
            <NavLink to={"/dashboard/userHome"}>
              <FaHome />
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/reservation"}>
              <FaCalendar />
              Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/payment"}>
              <MdOutlinePayment />
              Payment History
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/cart"}>
              <FaShoppingCart />
              My Cart
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/review"}>
              <FaAddressCard />
              Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to={"/dashboard/booking"}>
              <FaList />
              My Booking
            </NavLink>
          </li>
          <div className="divider mt-0 mb-0 gap-0"></div>
          <li>
            <NavLink to={"/"}>
              <FaHome />
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salads"}>
              <FaMenorah />
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salads"}>
              <FaShoppingBasket />
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink to={"/order/salads"}>
              <MdContactMail />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-5 bg-white">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
