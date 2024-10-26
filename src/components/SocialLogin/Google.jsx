import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";

const Google = () => {
  const { googleSign } = useAuth();

  const handleGoogleLogin = () => {
    googleSign();
  };
  return (
    <p onClick={handleGoogleLogin} className="icon-style bg-orange-500">
      <FaGoogle size={25} />
    </p>
  );
};

export default Google;
