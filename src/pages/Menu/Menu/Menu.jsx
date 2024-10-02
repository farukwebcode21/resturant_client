import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover";
import menuImage from "../../../assets/menu/banner3.jpg";
import PopularMenu from "../../Home/PopularMenu/PopularMenu";
const Menu = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu </title>
      </Helmet>
      <Cover img={menuImage} title={"our menu"} />
      <PopularMenu />
      <Cover img={menuImage} title={"our menu"} />
      <PopularMenu />
      <Cover img={menuImage} title={"our menu"} />
      <PopularMenu />
    </div>
  );
};

export default Menu;
