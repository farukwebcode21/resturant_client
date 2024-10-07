import { Link } from "react-router-dom";
import registationImage from "../../assets/others/authentication2.png";

const SignUp = () => {
  return (
    <div className="min-h-screen hero login-login">
      <div className="flex hero-content ">
        <div className="text-center lg:text-left">
          <img className="w-full" src={registationImage} alt="login" />
        </div>
        <div>
          <h1 className="login-text">Sign Up</h1>
          <div className="sign-form">
            <form className="px-5 py-0 card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-black label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type here"
                  className="bg-white input input-bordered"
                  required
                />
              </div>
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
              <div className="mt-6 form-control">
                <button className="sign-btn">Sign Up</button>
              </div>
              <div className="space-y-3 text-center">
                <p className="text-orange-400 ">
                  Already registered ? <Link to="/login">Go to login in</Link>
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

export default SignUp;
