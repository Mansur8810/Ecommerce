import { AccountSchema } from "../Constant/ValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const AccountForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(AccountSchema),
  });

  const submit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-col justify-center space-y-5 items-center mx-auto bg-white px-6 py-10 md:px-24 md:py-20 shadow-xl rounded-sm w-full md:w-2/3"
    >
      <h2 className="text-primary text-xl font-medium">Edit your Profile</h2>

      {/* Name Fields */}
      <article className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium">First Name</label>
          <input
            type="text"
            placeholder="Md"
            className={`bg-gray-100 py-2 px-4 rounded-md ${
              errors.name && "input-error"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Last Name</label>
          <input
            type="text"
            placeholder="Md"
            className={`bg-gray-100 py-2 px-4 rounded-md ${
              errors.lastname && "input-error"
            }`}
            {...register("lastname")}
          />
          {errors.lastname && (
            <span className="text-sm text-red-500">
              {errors.lastname.message}
            </span>
          )}
        </div>
      </article>

      {/* Email and Address Fields */}
      <article className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            placeholder="rimel1111@gmail.com"
            className={`bg-gray-100 py-2 px-4 rounded-md ${
              errors.email && "input-error"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-sm text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="flex flex-col">
          <label className="text-sm font-medium">Address</label>
          <input
            type="text"
            placeholder="Kingston, 5236, United State"
            className={`bg-gray-100 py-2 px-4 rounded-md ${
              errors.address && "input-error"
            }`}
            {...register("address")}
          />
          {errors.address && (
            <span className="text-sm text-red-500">
              {errors.address.message}
            </span>
          )}
        </div>
      </article>

      {/* Password Fields */}
      <article className="grid grid-cols-1 gap-5 w-full">
        <div className="flex flex-col">
          <label className="text-sm font-medium">Current Password</label>
          <input
            type="password"
            placeholder="Current Password"
            className={`bg-gray-100 py-2 px-4 rounded-md ${
              errors.curpassword && "input-error"
            }`}
            {...register("curpassword")}
          />
          {errors.curpassword && (
            <span className="text-sm text-red-500">
              {errors.curpassword.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">New Password</label>
          <input
            type="password"
            placeholder="New password"
            className={`bg-gray-100 py-2 px-4 rounded-md ${
              errors.newpassword && "input-error"
            }`}
            {...register("newpassword")}
          />
          {errors.newpassword && (
            <span className="text-sm text-red-500">
              {errors.newpassword.message}
            </span>
          )}
        </div>

        <div className="flex flex-col">
          <label className="text-sm font-medium">Confirm New Password</label>
          <input
            type="password"
            placeholder="Confirm New Password"
            className={`bg-gray-100 py-2 px-4 rounded-md ${
              errors.confirmPassword && "input-error"
            }`}
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <span className="text-sm text-red-500">
              {errors.confirmPassword.message}
            </span>
          )}
        </div>
      </article>

      {/* Buttons */}
      <div className="flex justify-end space-x-4 w-full">
        <button
          className="px-5 py-2 bg-gray-300 rounded-sm text-black"
          type="submit"
          onClick={() => reset()}
        >
          Cancel
        </button>
        <button
          className="px-7 py-2 bg-primary rounded-sm text-white"
          type="submit"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
};

export default AccountForm;
