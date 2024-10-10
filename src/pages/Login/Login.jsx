import { Link } from "react-router-dom";
import registationImage from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import "./Login.css";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const { signInUser } = useContext(AuthContext);

  const handleValidateCaptcha = (event) => {
    event.preventDefault();
    const user_captcha_value = captchaRef.current.value;
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
      console.log("Login successfully:", userEmail);
    } catch (error) {
      console.error("Sign in user :", error);
    }
  };

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  return (
    <div className="min-h-screen hero login-login">
      <div className="flex flex-col md:flex-row hero-content ">
        <div className="text-center w-1/2 lg:text-left">
          <img className="w-full" src={registationImage} alt="login" />
        </div>
        <div>
          <h1 className="login-text">Login</h1>
          <div className="sign-form w-1/2">
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
                  type="text"
                  name="captcha"
                  ref={captchaRef}
                  placeholder="Type captcha"
                  className="bg-white input input-bordered mb-3"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-outline btn-xs"
                >
                  Validate
                </button>
              </div>

              <div className="mt-6 form-control">
                <input
                  type="submit"
                  disabled={disabled}
                  value="Sign In"
                  className="btn btn-primary"
                />
              </div>
              <div className="space-y-3 text-center">
                <p className="text-orange-400 ">
                  New here? <Link to="/sign-up">Create a new account</Link>
                </p>
                <p className="font-bold text-black"> Or sign up with</p>
              </div>
            </form>
            <div className="logo-div">
              <a className="social-login" href="">
                F
              </a>{" "}
              <a className="social-login" href="">
                G
              </a>{" "}
              <a className="social-login" href="">
                G
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
