import { Link } from "react-router-dom";
import registationImage from "../../assets/others/authentication2.png";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { useState } from "react";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegister = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    // ! Reset previous messages
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const result = await createUser(email, password);
      const user = result;
      // update the user's profile with the name
      await updateProfile(user, {
        displayName: name,
      });
      setSuccessMessage("User created successfully ! Welcome, " + name);
    } catch (error) {
      setErrorMessage("Error Creating user:" + error.message);
    } finally {
      event.target.reset();
    }
  };

  return (
    <div className="min-h-screen hero login-login">
      <div className="flex flex-col md:flex-row-reverse hero-content">
        <div className="text-center md:w-1/2 lg:text-left">
          <img className="w-full h-auto" src={registationImage} alt="login" />
        </div>
        <div className="md:w-1/2">
          <h1 className="login-text">Sign Up</h1>
          {/* Display Success Message */}
          {successMessage && (
            <div className="alert alert-success">
              <p>{successMessage}</p>
            </div>
          )}

          {/* Display Error Message */}
          {errorMessage && (
            <div className="alert alert-error">
              <p>{errorMessage}</p>
            </div>
          )}
          <div className="sign-form ">
            <form onSubmit={handleRegister} className="px-5 py-0 card-body">
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
