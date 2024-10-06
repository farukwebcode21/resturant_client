import { useState } from "react";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../../../hooks/useMenu";
import OrderTabs from "../OrderTabs";
import { useParams } from "react-router-dom";

const Order = () => {
  const categoryies = ["salads", "pizzas", "soups", "dessert", "drinks"];
  console.log("intital".categoryies);
  const { category } = useParams();
  const initialIndex = categoryies.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  console.log("TabIndex", tabIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");

  return (
    <div>
      <Cover
        img={orderCoverImg}
        title={"Order Food"}
        subTile={"Would you like to try a dish?"}
      />

      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList
          role="tablist"
          className="py-4 mb-4 uppercase tabs tabs-bordered"
        >
          <Tab className="tab">salad</Tab>
          <Tab className="tab">pizza</Tab>
          <Tab className="tab">soups</Tab>
          <Tab className="tab">dessert</Tab>
          <Tab className="tab">drinks</Tab>
        </TabList>

        <TabPanel>
          <OrderTabs items={salads} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={pizzas} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={soups} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={desserts} />
        </TabPanel>
        <TabPanel>
          <OrderTabs items={drinks} />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
