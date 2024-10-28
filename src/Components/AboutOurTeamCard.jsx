import { Instagram, Linkedin, Twitter } from "lucide-react";

const AboutOurTeamCard = ({ imgSrc, heading, skills }) => {
  return (
    <section className="p-4 sm:p-6 bg-white shadow-md rounded-lg ">
      <figure className="flex justify-center bg-gray-100 items-center w-full sm:w-auto h-72 rounded-md overflow-hidden">
        <img
          src={imgSrc}
          alt="Team member"
          className="max-w-full h-full object-cover mix-blend-multiply"
        />
      </figure> 
      <article className="space-y-3 text-center sm:text-start mt-4">
        <h1 className="font-medium text-xl sm:text-2xl">{heading}</h1>
        <p className="text-sm sm:text-base font-light text-gray-600">{skills}</p>
        <div className="flex justify-center sm:justify-start items-center gap-4 mt-3">
          <a href="#" aria-label="Twitter" className="hover:text-blue-500">
            <Twitter strokeWidth={1.4} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-pink-500">
            <Instagram strokeWidth={1.4} />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-700">
            <Linkedin strokeWidth={1.4} />
          </a>
        </div>
      </article>
    </section>
  );
};

export default AboutOurTeamCard;
