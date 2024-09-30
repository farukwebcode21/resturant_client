import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle
        subTile={"From 11.00am to 10.00pm"}
        heading={"order online"}
      />
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mb-12 mySwiper"
      >
        <SwiperSlide>
          <img src={slide1} alt="slider_1" />
          <h3 className="-mt-16 text-4xl text-center text-white uppercase">
            Salads
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="slider_2" />
          <h3 className="-mt-16 text-4xl text-center text-white uppercase">
            pizzas
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="slider_3" />
          <h3 className="-mt-16 text-4xl text-center text-white uppercase">
            Soups
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="slider_4" />
          <h3 className="-mt-16 text-4xl text-center text-white uppercase">
            Desserts
          </h3>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="slider_5" />
          <h3 className="-mt-16 text-4xl text-center text-white uppercase">
            Salads
          </h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
