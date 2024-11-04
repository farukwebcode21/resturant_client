import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const Google = () => {
  const { googleSign } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSign()
      .then((result) => {
        console.log("Google sign-in result:", result.user); // Debugging line
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName,
        };
        console.log("userInfo", userInfo);
        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <p
      onClick={handleGoogleLogin}
      className="icon-style bg-orange-500 cursor-pointer"
    >
      <FaGoogle size={25} />
    </p>
  );
};

export default Google;
