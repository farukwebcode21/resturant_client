import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="text-white bg-fixed featured-item">
      <SectionTitle subTile={"check it out"} heading={"Featured Item"} />
      <div className="items-center pb-20 bg-slate-400 bg-opacity-20 ju-slstify-center px-36 md:flex">
        <div>
          <img src={featuredImg} alt="featuredImage" />
        </div>
        <div className="md:ml-10">
          <p>Oct 01, 2024</p>
          <p className="uppercase">Where can i get some?</p>
          <p className="mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
            facilis error ut, odio explicabo doloremque beatae distinctio
            eligendi harum perferendis? Esse, nesciunt architecto, quod
            molestias mollitia iusto commodi iste ad illo ullam adipisci,
            similique fuga facilis aliquam porro? Deserunt dignissimos dolores
            fugit aperiam repudiandae vero dolorum nulla quas, harum in.
          </p>
          <button className="border-0 border-b-4 bo btn-outline btn">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
