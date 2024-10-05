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

  // Dynamic descriptions for each category
  const descriptions = {
    dessert: "Indulge in our sweet and delicious desserts.",
    soup: "Warm up with our comforting and flavorful soups.",
    salad: "Enjoy our fresh and healthy salad options.",
    pizza: "Savor the taste of our wood-fired pizzas.",
    offered: "Check out today's special offers and don't miss out!",
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Cover
        img={menuImage}
        title={"our menu"}
        subTile={"Would you like to try a dish ?"}
      />
      <SectionTitle subTile={"Don't Miss"} heading={"Today's Offer"} />
      <MenuCategory items={offered} />
      <MenuCategory
        items={desserts}
        title={"Dessert"}
        description={descriptions.dessert}
        img={dessertImg}
      />
      <MenuCategory
        items={soups}
        title={"Soups"}
        description={descriptions.soup}
        img={soupImg}
      />
      <MenuCategory
        items={salads}
        title={"Salads"}
        description={descriptions.salad}
        img={saladImg}
      />
      <MenuCategory
        items={pizzas}
        title={"Pizzas"}
        description={descriptions.pizza}
        img={pizzaImg}
      />
    </div>
  );
};

export default Menu;
