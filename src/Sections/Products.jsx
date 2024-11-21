import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FreeMode, Navigation } from "swiper/modules";

import ProductCard from "../Components/ProductCard";
import Button from "../Components/Button";
import useProductData from "../hooks/useProductData";
import { generateRandomNumber } from "../hooks/utils";

const Products = () => {
  const { products, loading, error } = useProductData();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[20rem]">
        <div className="loader"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-[20rem]">
        <p className="text-red-500">Failed to load products. Please try again.</p>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-[20rem]">
        <p>No products found.</p>
      </div>
    );
  }

  return (
    <div>
      <Swiper
        slidesPerView={5} 
        freeMode={true}
        navigation={false} 
        modules={[FreeMode, Navigation]}
        className="md:py-12"
        breakpoints={{
          0: {
            slidesPerView: 1, 
            spaceBetween: 5, 
          },
          320: {
            slidesPerView: 1, 
            spaceBetween: 5, 
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
            spaceBetween: 30,
          },
          1280: {
            slidesPerView: 5, 
            spaceBetween: 40,
          },
        }}
      >
        {products.map((item) => {
          const random = generateRandomNumber(50);
          return (
            <SwiperSlide key={item.id}>
              <ProductCard
                {...item}
                readMore={`/products/${item.id}`}
                discount={random}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="flex justify-center">
        <Button
          text="View All Products"
          variant="default"
          className=" btn py-3 px-6 my-5 text-sm"
        />
      </div>

      <hr className="w-full my-10" />
    </div>
  );
};

export default Products;
