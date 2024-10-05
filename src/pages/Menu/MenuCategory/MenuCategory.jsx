import Cover from "../../Shared/Cover";
import Menuitem from "../../Shared/Menuitem";

const MenuCategory = ({ items, title, img, description }) => {
  return (
    <div className="pt-4">
      {title && <Cover img={img} title={title} description={description} />}
      <div className="grid gap-4 py-8 md:grid-cols-2">
        {items.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuCategory;
