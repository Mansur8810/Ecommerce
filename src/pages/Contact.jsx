import { Phone } from "lucide-react";
import { ContactSchema } from "../Constant/ValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(ContactSchema),
  });
  const submit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <section className="container flex flex-wrap justify-center items-center ">
      <article className="flex-col justify-center items-center space-y-5 ">
        <div className="flex  items-center gap-4">
          <img
            src="/Contact/Phone.svg"
            alt="phone"
            className="bg-primary px-3 py-3 rounded-full"
          />
          <h4 className="text-xl font-kanit font-bold">Call To Us</h4>
        </div>
        <div className="space-y-3 *:font-poppins">
          <p>We are available 24/7,7 days a week.</p>
          <p>Phone:+880022382972</p>
        </div>
        <hr className="w-60 " />

        <div className="flex  items-center gap-4">
          <img
            src="/Contact/Email.svg"
            alt="email"
            className="bg-primary px-3 py-4 rounded-full"
          />
          <h4 className="text-xl font-kanit font-bold">Call To Us</h4>
        </div>
        <div className="space-y-3 *:font-poppins">
          <p className="max-w-xs">
            Fill out our from and wel will conact you within 24 hours.
          </p>
          <p>Emails: customer@exlusive.com</p>
          <p>Emails: support@exlusive.com</p>
        </div>
      </article>

      <form className="space-y-10 " onSubmit={handleSubmit(submit)}>
        <div className="flex flex-wrap justify-center items-center gap-3">
          <label className="form-control w-full max-w-52">
            <div className="label">
              <span className="label-text">Name</span>
            </div>
            <input
              placeholder="your name"
              className={`input input-bordered  max-w-xs ${
                errors.email && "input-error"
              }`}
              {...register("name")}
            />
            {errors.name && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.name.message}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full max-w-52">
            <div className="label">
              <span className="label-text">Email</span>
            </div>
            <input
              placeholder="company@email.com"
              className={`input input-bordered  max-w-xs ${
                errors.email && "input-error"
              }`}
              {...register("email")}
            />
            {errors.email && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.email.message}
                </span>
              </div>
            )}
          </label>

          <label className="form-control w-full max-w-52">
            <div className="label">
              <span className="label-text">phone</span>
            </div>
            <input
              type="tel"
              pattern="+91-[0-9]{4}[0-9]{2}[0-9]{4}"
              placeholder="*********"
              className={`input input-bordered w-full max-w-xs ${
                errors.number && "input-error"
              }`}
              {...register("number")}
            />
            {errors.number && (
              <div className="label">
                <span className="label-text-alt text-error">
                  {errors.number.message}
                </span>
              </div>
            )}
          </label>
        </div>

        <textarea
          className={`textarea textarea-bordered w-full h-60 ${
            errors.textarea && "input-error"
          }`}
          {...register("textarea")}
          placeholder="Bio"
        ></textarea>
        {errors.textarea && (
          <div className="label">
            <span className="label-text-alt text-error">
              {errors.textarea.message}
            </span>
          </div>
        )}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-5 py-2 bg-primary rounded-sm text-white w-full sm:w-auto"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
