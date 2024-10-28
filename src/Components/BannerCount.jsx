
import { useState, useEffect } from "react";
import Button from '../Components/Button';
const BannerCount = () => {
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
    <div className="flex justify-between">
    <div className="grid grid-flow-col gap-5 md:grid-cols-4 grid-cols-2  text-center auto-cols-max">
      <button className=" btn btn-circle md:size-14 flex flex-col bg-white"> 
        <span className="countdown font-bold text-xl ">
          <span style={{ "--value": value.days }}></span> 
        </span>
        <h1 className="font-poppins">Days</h1>
      </button>
      <button className="btn btn-circle md:size-14  flex flex-col bg-white">
        <span className="countdown  font-bold text-xl">
          <span style={{ "--value": value.hour }}></span>
        </span>
        <h1 className="font-poppins">Hour</h1>
      </button>
      <button className=" btn btn-circle md:size-14  bg-white flex flex-col">

        <span className="countdown  font-bold text-xl">
          <span style={{ "--value": value.minute }}></span>
        </span>
        <h1 className="font-poppins">Min</h1>
      </button>
      <div className="btn btn-circle md:size-14 bg-white flex flex-col">

        <span className="countdown  font-bold text-xl">
          <span style={{ "--value": value.second }}></span>
        </span>
        <h1 className="font-poppins">Sec</h1>
      </div>
    </div>
  </div>
  )
}

export default BannerCount