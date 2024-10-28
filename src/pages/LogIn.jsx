import { LoginSchema } from "../Constant/ValidationSchema"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState : {errors},
    reset,
  }=useForm({
    resolver : zodResolver(LoginSchema),
  });
  const submit = (values) => {
    console.log(values)
    reset();
  }
  return (
    <article className="flex flex-wrap container items-center justify-between">
        <figure>
            <img src="/SignUp/beatsnoop.svg" alt="imag" />
        </figure>
        <form  onSubmit={handleSubmit(submit)} className="space-y-5">
          <div className="space-y-3">
            <h1 className="text-3xl tracking-wider font-kanit">Log in to Exlusive</h1>
          <h3 className="font-medium tracking-wider text-sm">
            Enter your details below
          </h3>
          </div>
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
        <div className="flex flex-wrap flex-row justify-between items-center ">
        <button type="submit" className="px-5 py-2 bg-primary rounded-sm text-white">Log in</button>
          <a href="forget" className="text-primary">Forget Password?</a>
        </div>
        </form>
    </article>
  )
}

export default LogIn