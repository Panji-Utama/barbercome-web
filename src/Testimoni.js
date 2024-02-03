import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Testimoni = () => {
  return (
    <div id="testimoni" className="font-montserrat font-bold">
      <p className="h-[1000px] bg-white text-secondColor">Testimoni</p>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Testimoni;
