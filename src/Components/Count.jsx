import { useState, useEffect } from "react";
import Button from "./Button";

const Countdown = () => {
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
    <div className="flex flex-wrap justify-center md:justify-between items-center my-12 md:gap-10">
      <div className="text-center md:text-left">
        <div className="flex items-center gap-3 justify-center md:justify-start">
          <Button variant="default" className="h-12" />
          <h1 className="font-medium text-lg text-primary">Today's</h1>
        </div>
        <div className="my-4">
          <h1 className="tracking-wide font-poppins font-bold text-3xl">
            Flash Sales
          </h1>
        </div>
      </div>

      <div className="grid grid-flow-col gap-5 text-center auto-cols-max sm:grid-cols-4 sm:gap-8">
        <div className="flex flex-col items-center">
          <h1 className="font-poppins">Days</h1>
          <span className="countdown font-bold text-4xl">
            <span style={{ "--value": value.days }}></span>:
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-poppins">Hour</h1>
          <span className="countdown font-bold text-4xl">
            <span style={{ "--value": value.hour }}></span>:
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-poppins">Min</h1>
          <span className="countdown font-bold text-4xl">
            <span style={{ "--value": value.minute }}></span>:
          </span>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="font-poppins">Sec</h1>
          <span className="countdown font-bold text-4xl">
            <span style={{ "--value": value.second }}></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
