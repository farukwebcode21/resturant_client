import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useState } from "react";
import Menuitem from "../../Shared/Menuitem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="mb-8">
      <SectionTitle subTile={"Popular Items"} heading={"From Our Menu"} />
      <div className="grid gap-4 md:grid-cols-2">
        {menu.map((item) => (
          <Menuitem key={item._id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
