import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useEffect } from "react";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch(menu.json)
      .then((response) => response.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  });
  return (
    <section>
      <SectionTitle subTile={"Popular Items"} heading={"From Our Menu"} />
    </section>
  );
};

export default PopularMenu;
