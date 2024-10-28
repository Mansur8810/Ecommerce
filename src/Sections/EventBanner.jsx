import React from 'react'
import { useState, useEffect } from "react";
import Button from '../Components/Button';
import BannerCount from '../Components/BannerCount';


const EventBanner = () => {
  const [value, setValue] = useState({
    second: 60,
    minute: 60,
    hour: 13,
    days: 15,
  });
  useEffect(() => {
    const timer = setTimeout(() => {
      setValue((v) =>
        v.second <= 0
          ? { ...value, second: value.second }
          : { ...value, second: v.second - 1 }
      );
      if (value.second === 0) {
        setValue({
          ...value,
          minute: value.minute - 1,
          second: 60,
        });
      }
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [value.second]);
  return (
    <div className=' bg-black flex flex-wrap h-full w-full justify-between items-center my-12'>
      <div className='flex flex-col justify-between py-16 px-16 items-start gap-8 '>
        <h6 className='text-accent'>Categories</h6>
        <h1 className='text-white font-medium text-4xl max-w-80 tracking-wide'>Enhance Your Music Experience</h1>
    <BannerCount/>
    <Button text="Buy Now" variant="default" className="bg-accent text-sm py-3 px-8"/>

      </div>
      <figure className='px-8 '>
        <img src="/EventBanner/Jbl-Speaker.svg" alt="EventBanner"/>
      </figure>
    </div>
  )
}

export default EventBanner