import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "User LogOut Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navOptions = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order/salads"}>Order Food</Link>
      </li>
    </>
  );
  return (
    <div className="fixed z-10 max-w-screen-xl bg-black navbar bg-opacity-30 text-wrap ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="text-xl btn btn-ghost">Bistro Boss</a>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navOptions}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className=" flex justify-center items-center gap-5">
            <button onClick={handleLogOut} className="btn btn-ghost">
              LogOut
            </button>
            <span className="text-pink-600">{user.email}</span>
          </div>
        ) : (
          <div className="flex gap-6">
            <li className="list-none hover:text-yellow-500">
              <Link to={"/login"}>Login</Link>
            </li>
            <li className="list-none hover:text-yellow-500">
              <Link to={"/sign-up"}>Sign Up</Link>
            </li>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
