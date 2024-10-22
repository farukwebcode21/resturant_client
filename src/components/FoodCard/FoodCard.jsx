import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();

  const handleAddToCart = (food) => {
    if (user && user.email) {
      // TODO: send cart item to the database
      console.log(user.email, food);
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not logged In?",
        text: "Please login to add to the cart!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          //  send the user login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <div className="flex items-center justify-center">
      <div className="shadow-xl card bg-base-100 w-96">
        <figure>
          <img src={image} alt="Shoes" />
          <p className="absolute px-2 text-white bg-black ext-white p right-4 top-3">
            ${price}
          </p>
        </figure>
        <div className="flex flex-col items-center card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="justify-end card-actions">
            <button
              onClick={() => handleAddToCart(item)}
              className="text-orange-400 border-0 border-b-4 border-orange-500 bg-slate-600 btn-outline btn"
            >
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
