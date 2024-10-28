import { NavLink } from "react-router-dom";
import Button from "../Components/Button";

const Error = () => {
  return (
    <article className="flex flex-col items-center justify-center space-y-8 px-4 py-20 sm:px-8 lg:px-32 xl:px-48 2xl:px-64 text-center">
      <div className="space-y-4">
        <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-wide">
          404 Not Found
        </h1>
        <p className="text-base sm:text-lg max-w-lg mx-auto">
          The page you are looking for does not exist. You can return to the home page.
        </p>
      </div>
      <div className="flex justify-center">
        <NavLink to="/">
          <Button text="Back to Home Page" variant="default" className="py-3 px-6 text-sm sm:text-base" />
        </NavLink>
      </div>
    </article>
  );
};

export default Error;
