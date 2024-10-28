import { MoveRight } from "lucide-react";
const Button = ({ text, variant, className, }) => {
  return (
    <button
      className={`bg-primary py-1 px-3 rounded-md font-poppins ${className} ${
        variant === "default"
          ? "btn-primary text-secondary shadow-xl "
          : variant === "defaultWithIcon"
          ? "btn-primary text-secondary"
          : "btn-outline btn-primary px-6"
          
      }`}
    >
      {text}
      {variant === "defaultWithIcon" && <MoveRight />}
    </button>
  );
};

export default Button;