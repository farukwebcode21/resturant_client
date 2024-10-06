const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="">
      <div className="shadow-xl card bg-base-100 w-96">
        <figure>
          <img src={image} alt="Shoes" />
          <p className="absolute px-2 text-white bg-black ext-white p right-4 top-3">
            ${price}
          </p>
        </figure>
        <div className="card-body">
          <h2 className="text-lg font-bold text-center">{name}</h2>
          <p>{recipe}</p>
          <div className="justify-end card-actions">
            <button className="btn btn-primary">Add To Card</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
