import { Parallax } from "react-parallax";

const Cover = ({ img, title, description, subTile }) => {
  return (
    <Parallax
      blur={{ min: -1, max: 5 }}
      bgImage={img}
      bgImageAlt="the background"
      strength={200}
    >
      <div className="h-[600px] hero">
        <div className=" bg-opacity-60"></div>
        <div className="text-center text-white bg-opacity-60 w-[800px] h-[300px] hero-content bg-black">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white uppercase">
              {title}
            </h1>
            {subTile && <h2 className="mb-3 text-2xl text-white">{subTile}</h2>}
            <p className="mb-5">{description}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
