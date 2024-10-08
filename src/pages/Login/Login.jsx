import { Link } from "react-router-dom";
import registationImage from "../../assets/others/authentication2.png";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import "./Login.css";
import { useEffect } from "react";
const Login = () => {
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  return (
    <div className="min-h-screen hero login-login">
      <div className="flex flex-col md:flex-row hero-content ">
        <div className="text-center lg:text-left">
          <img className="w-full" src={registationImage} alt="login" />
        </div>
        <div>
          <h1 className="login-text">Login</h1>
          <div className="sign-form">
            <form className="px-5 py-0 card-body">
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
              </div>
              <div className="form-control">
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="bg-white input input-bordered"
                  required
                />
              </div>
              <div className="mt-6 form-control">
                <button className="sign-btn">Sign In</button>
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
