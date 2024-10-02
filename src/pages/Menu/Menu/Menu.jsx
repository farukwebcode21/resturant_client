import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Cover img={menuImage} title={"our menu"} />
      <SectionTitle subTile={"Don't Miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      <MenuCategory items={desserts} title={"Dessert"} img={dessertImg} />
      <MenuCategory items={soups} title={"Soups"} img={soupImg} />
      <MenuCategory items={salads} title={"Salads"} img={saladImg} />
      <MenuCategory items={pizzas} title={"Pizzas"} img={pizzaImg} />
    </div>
  );
};

export default Menu;
