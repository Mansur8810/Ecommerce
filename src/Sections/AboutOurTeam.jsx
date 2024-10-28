import AboutOurTeamCard from "../Components/AboutOurTeamCard";
import { OurTeam } from "../Constant/Main";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../Styles/index.css";

import { Pagination } from "swiper/modules";

const AboutOurTeam = () => {
  return (
    <section className="flex justify-center items-center my-20">
      <Swiper
        slidesPerView={3} 
        spaceBetween={20} 
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
        breakpoints={{
          0: {
            slidesPerView: 1, 
            spaceBetween: 5, 
          },
          640: {
            slidesPerView: 1, 
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3, 
            spaceBetween: 40,
          },
       
        }}
      >
        {OurTeam.map((item) => (
          <SwiperSlide key={item.imgSrc}>
            <AboutOurTeamCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default AboutOurTeam;
