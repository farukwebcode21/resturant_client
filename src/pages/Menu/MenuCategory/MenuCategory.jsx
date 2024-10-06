import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover";
import Menuitem from "../../Shared/Menuitem";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="pt-4">
      {title && <Cover img={img} title={title} description={description} />}
      <div className="grid gap-4 py-8 md:grid-cols-2">
        {items.slice(0, 6).map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center py-4">
        <Link
          to={`/order/${title}`}
          className="border-0 border-b-4 bo btn-outline btn"
        >
          ORDER YOUR FAVOURITE FOOD
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;
