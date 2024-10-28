import Rivewcard from "../Components/Rivewcard";
import { Aboutrivew } from "../Constant/Main";

const AboutRivew = () => {
  return (
    <div className="flex flex-wrap justify-center gap-11 my-12 items-center">
      {Aboutrivew.map((item) => (
        <article key={item.imgSrc}>
          <Rivewcard {...item}/>
        </article>
      ))}
    </div>
  );
};

export default AboutRivew;
