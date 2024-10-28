import { useForm } from "react-hook-form";
import { SignupSchema } from "../Constant/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import Footer from "../Components/Footer";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(SignupSchema),
  });

  const submit = (values) => {
    console.log(values);
    reset();
  };
  return (
    <section className=" flex flex-wrap items-center ">
      <figure>
        <img src="/SignUp/beatsnoop.svg" alt="" />
      </figure>
      <form
        className="space-y-5 flex flex-col justify-center mx-auto"
        onSubmit={handleSubmit(submit)}
      >
        <article className="space-y-3">
          <h1 className="text-3xl tracking-wider font-kanit">
            Create an account
          </h1>
          <h3 className="font-medium tracking-wider text-sm">
            Enter your details below
          </h3>
        </article>
        {/* Name start  */}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="Type here"
            className={`input input-bordered w-full max-w-xs ${
              errors.name && "input-error"
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
        {/* Name end  */}

        {/* Email start  */}

        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            placeholder="company@email.com"
            className={`input input-bordered w-full max-w-xs ${
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
        {/* Email end  */}

        {/* Password start  */}
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Password</span>
          </div>
          <input
            type="password"
            placeholder="*********"
            className={`input input-bordered w-full max-w-xs ${
              errors.password && "input-error"
            }`}
            {...register("password")}
          />
          {errors.password && (
            <div className="label">
              <span className="label-text-alt text-error">
                {errors.password.message}
              </span>
            </div>
          )}
        </label>
        {/* Passwrod end  */}
        <div className="flex flex-col  gap-4">
          <button
            className="py-2 rounded-sm text-white bg-primary "
            type="submit"
          >
            Create Account
          </button>
          <a
            href="/auth/google"
            className="px-6 py-2 rounded-sm border border-gray-500 flex items-center justify-center gap-2 transition duration-200 hover:bg-gray-100 hover:border-gray-700"
            aria-label="Sign up with Google"
          >
            <img
              src="/SignUp/Google.svg"
              alt="Google logo"
              className="w-5 h-5"
            />
            <span className="text-sm font-medium">Sign up with Google</span>
          </a>

          <article className="flex gap-3 justify-center items-center">
            <a href="account"> Already have account?</a>
            <a href="log in" className=" underline underline-offset-4">
              {" "}
              Log in
            </a>
          </article>
        </div>
      </form>
    </section>
  );
};

export default SignUp;
