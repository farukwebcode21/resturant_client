const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;

  const handleAddToCart = (food) => {
    console.log(food);
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
