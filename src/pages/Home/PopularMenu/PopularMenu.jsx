import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Menuitem from "../../Shared/Menuitem";
import useMenu from "../../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <section className="mb-8">
      <SectionTitle subTile={"Popular Items"} heading={"From Our Menu"} />
      <div className="grid gap-4 md:grid-cols-2">
        {popular.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
      <button className="border-0 border-b-4 btn btn-outline"> View All</button>
    </section>
  );
};

export default PopularMenu;
