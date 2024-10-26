import { Link, useNavigate } from "react-router-dom";
import registationImage from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaFacebookF, FaGoogle, FaGithub } from "react-icons/fa";

const SignUp = () => {
  const axiosPublic = useAxiosPublic();

  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          // create user entry of database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              console.log("User Data:", userInfo);
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "User created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          console.error(error.message);
        });
    });
  };

  return (
    <section>
      <Helmet>
        <title>Bistro Boss |Sign-Up</title>
      </Helmet>
      <div className="min-h-screen hero login-login">
        <div className="flex flex-col md:flex-row-reverse hero-content">
          <div className="text-center md:w-1/2 lg:text-left">
            <img className="w-full h-auto" src={registationImage} alt="login" />
          </div>
          <div className="md:w-1/2">
            <h1 className="login-text">Sign Up</h1>
            <div className="sign-form ">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="px-5 py-0 card-body"
              >
                <div className="form-control">
                  <label className="label">
                    <span className="text-black label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    name="name"
                    placeholder="Type here"
                    className="bg-white input input-bordered"
                  />
                  {errors.name && (
                    <span className="text-pink-700">
                      Name field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-black label-text">PhotoURL</span>
                  </label>
                  <input
                    {...register("photoURL", { required: true })}
                    type="text"
                    placeholder="PhotoURL"
                    className="bg-white input input-bordered"
                  />
                  {errors.photoURL && (
                    <span className="text-pink-700">
                      Photo URL field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-black label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    name="email"
                    placeholder="Type here"
                    className="bg-white input input-bordered"
                  />
                  {errors.email && (
                    <span className="text-pink-700">
                      Email field is required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="text-black label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    })}
                    type="password"
                    name="password"
                    placeholder="Type here"
                    className="bg-white input input-bordered"
                  />
                  {errors.password?.type === "required" && (
                    <span className="text-pink-700">
                      Password must be required
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="text-pink-700">
                      Password must be 6 required
                    </span>
                  )}
                  {errors.password?.type === "maxLength" && (
                    <span className="text-pink-700">
                      Password must be less than 20 required
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <>
                      <span className="text-pink-700">
                        At least one lowercase letter.
                      </span>
                      <span className="text-pink-700">
                        At least one uppercase letter
                      </span>
                      <span className="text-pink-700">At least one digit.</span>
                      <span className="text-pink-700">
                        At least one special character.
                      </span>
                      <span className="text-pink-700">
                        less thand 20 character
                      </span>
                    </>
                  )}
                </div>
                <div className="mt-6 form-control">
                  <button className="sign-btn">Sign Up</button>
                </div>
                <div className="space-y-3 text-center">
                  <p className="text-orange-400 ">
                    Already registered ? <Link to="/login">Go to login in</Link>
                  </p>
                  <div className="divider divider-neutral text-black">OR</div>
                </div>
              </form>
              <div className="social_icon">
                <a className="icon-style bg-[#1877F2]" href="">
                  <FaFacebookF size={25} />
                </a>
                <a className="icon-style bg-orange-500" href="">
                  <FaGoogle size={25} />
                </a>
                <a className="icon-style bg-gray-600" href="">
                  <FaGithub size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
