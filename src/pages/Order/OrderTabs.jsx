import FoodCard from "../../components/FoodCard/FoodCard";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OrderTabs = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  const chunkItems = (array, size) => {
    const chunked = [];
    for (let i = 0; i < array.length; i += size) {
      chunked.push(array.slice(i, i + size));
    }
    return chunked;
  };

  const chunkedItems = chunkItems(items, 6);

  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        {chunkedItems.map((chunk, index) => (
          <SwiperSlide key={index}>
            <div className="grid gap-10 md:grid-cols-3">
              {chunk.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OrderTabs;
