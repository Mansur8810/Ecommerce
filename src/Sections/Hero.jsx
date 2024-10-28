import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Hero = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="myswiper max-h-[470px] md:max-w-[58rem] max-w-[25rem]  "
      >
        <SwiperSlide className="swiper-slid bg-black">
          <div className="flex flex-col mx-auto md:my-10 items-center space-y-6">
            <div className="flex justify-between items-center gap-3">
              <div className="">
                <img
                  src="/Hero/apple.png"
                  alt="images"
                  className="md:size-auto"
                />
              </div>
              <h1 className="text-white font-poppins text-sm">
                i phone 14 series
              </h1>
            </div>
            <h1 className="text-white  md:max-w-56 tracking-wider font-poppins font-bold md:text-4xl  ">
              Up to 10% off Voucher
            </h1>
            <span className="text-white flex items-center gap-2 ">
              <a href="">Shop Now</a>
              <ArrowRight className="size-5" />
            </span>
          </div>

          <div className="w-[496] h-[352]">
            <img src="/Hero/mobile.png" alt="" className="" />
          </div>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </div>
  );
};

export default Hero;
