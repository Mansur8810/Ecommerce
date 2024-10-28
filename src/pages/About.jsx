import Footer from "../Components/Footer";
import AboutOurTeam from "../Sections/AboutOurTeam";
import AboutRivew from "../Sections/AboutRivew";
import Service from "../Sections/Service";

const About = () => {
  return (
    <section>
      <div className="px-6 py-8 sm:px-12 sm:py-12">
        <article className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-10">
          <div className="max-w-[525px] space-y-5 lg:space-y-7">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl tracking-wider font-medium">
              Our Story
            </h1>
            <p className="text-base sm:text-lg text-gray-700">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and
              service solutions, Exclusive has 10,500 sellers and 300 brands
              and serves 3 million customers across the region.
            </p>
            <p className="text-base sm:text-lg text-gray-700">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer electronics to home appliances.
            </p>
          </div>
      
          <figure className="w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[600px]">
            <img
              src="/About/ourstory.svg"
              alt="Our Story"
              className="w-full h-auto object-cover"
            />
          </figure>
        </article>

        <div className="mt-10">
          <AboutRivew />
        </div>
        <div className="mt-10">
          <AboutOurTeam />
        </div>
      </div>
      <div className="">
        <Service />
      </div>
    </section>
  );
};

export default About;
