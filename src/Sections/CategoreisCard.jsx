import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";
import { CategoreisContent } from "../Constant/Main";

const CategoreisCard = () => {
  return (
    <div className="my-12">
      <Swiper
        freeMode={true}
        navigation={false} 
        modules={[FreeMode, Navigation]}
        className="h-40"
        breakpoints={{
          
          320: {
            slidesPerView: 3, 
            spaceBetween: 0, 
          },
          640: {
            slidesPerView: 2, 
            spaceBetween: 5, 
          },
          768: {
            slidesPerView: 3, 
            spaceBetween: 5, 
          },
          1024: {
            slidesPerView: 4, 
            spaceBetween: 40,
          },
          1280: {
            slidesPerView: 5, 
            spaceBetween: 50,
          },
        }}
      >
        {CategoreisContent.map((Categoreis, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-3 justify-start p-2 max-w-36 border-2 hover:bg-primary hover:text-white">
                <img src={Categoreis.imgSrc} alt="Categories images" />
                {Categoreis.CategoreisName}
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex justify-center items-center"></div>
      <hr className="w-full my-10" />
    </div>
  );
};

export default CategoreisCard;
