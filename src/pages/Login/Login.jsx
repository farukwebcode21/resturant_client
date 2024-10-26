import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import registationImage from "../../assets/others/authentication2.png";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./Login.css";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Facebook from "../../components/SocialLogin/Facebook";
import Google from "../../components/SocialLogin/Google";
import GithubLogin from "../../components/SocialLogin/GithubLogin";

const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const { signInUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  console.log("state location pathName", location.state);

  const handleValidateCaptcha = (event) => {
    event.preventDefault();
    const user_captcha_value = event.target.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handleLoginUser = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("clicking ", email, password);
    try {
      const result = await signInUser(email, password);
      const userEmail = result.email;
      console.log(userEmail);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User Login Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate(from, { replace: true });
    } catch (error) {
      console.error("Sign in user :", error);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <section>
      <Helmet title="Bistro Boss | Login" />
      <div className="min-h-screen hero login-login">
        <div className="flex flex-col md:flex-row hero-content ">
          <div className="text-center md:w-1/2 lg:text-left">
            <img className="lg:w-full" src={registationImage} alt="login" />
          </div>
          <div className="md:w-1/2">
            <h1 className="login-text">Login</h1>
            <div className="sign-form">
              <form onSubmit={handleLoginUser} className="px-5 py-0 card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="text-black label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="bg-white input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-black label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="Type here"
                    className="bg-white input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control">
                  <label className="label bg-transparent ">
                    <LoadCanvasTemplate reloadColor="red" />
                  </label>
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type captcha"
                    className="bg-white input input-bordered mb-3"
                  />
                </div>
                {/*TODO: applay disable for re captch  */}
                <div className="mt-6 form-control">
                  <input
                    type="submit"
                    disabled={false}
                    value="Sign In"
                    className="btn btn-primary"
                  />
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-orange-400 ">
                    New here? <Link to="/sign-up">Create a new account</Link>
                  </p>
                  <div className="divider divider-neutral text-black">OR</div>
                </div>
              </form>

              <div className="social_icon">
                <Facebook />
                <Google />
                <GithubLogin />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
