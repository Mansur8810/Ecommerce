import React from "react";
import { BillingSchema } from "../Constant/ValidationSchema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const BillingDetail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(BillingSchema),
  });

  const submit = (values) => {
    console.log(values);
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="space-y-6 max-w-4xl  my-10 p-2  bg-white shadow-md rounded-lg"
    >
      <h1 className="text-3xl py-5 font-medium tracking-wide text-center">
        Billing Details
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* First Name */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">First Name</label>
          <input
            type="text"
            className={`bg-gray-100 py-2 mt-2 rounded-lg border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
            {...register("name")}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name.message}</span>
          )}
        </div>

        {/* Company Name */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">Company Name</label>
          <input
            type="text"
            className={`bg-gray-100 py-2 px-4 mt-2 rounded-lg border ${
              errors.company && "border-red-500"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
            {...register("company")}
          />
          {errors.company && (
            <span className="text-red-500 text-xs">
              {errors.company.message}
            </span>
          )}
        </div>

        {/* Street Address */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">Street Address</label>
          <input
            type="text"
            className={`bg-gray-100 py-2 px-4 mt-2 rounded-lg border ${
              errors.street && "border-red-500"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
            {...register("street")}
          />
          {errors.street && (
            <span className="text-red-500 text-xs">
              {errors.street.message}
            </span>
          )}
        </div>

        {/* Apartment, floor, etc */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">
            Apartment, floor, etc. (optional)
          </label>
          <input
            type="text"
            className="bg-gray-100 py-2 px-4 mt-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
            {...register("apartment")}
          />
        </div>

        {/* Town/City */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">Town/City</label>
          <input
            type="text"
            className={`bg-gray-100 py-2 px-4 mt-2 rounded-lg border ${
              errors.city && "border-red-500"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
            {...register("city")}
          />
          {errors.city && (
            <span className="text-red-500 text-xs">{errors.city.message}</span>
          )}
        </div>

        {/* Phone Number */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">Phone Number</label>
          <input
            type="tel"
            pattern="+91-[0-9]{4}[0-9]{2}[0-9]{4}"
            className={`bg-gray-100 py-2 px-4 mt-2 rounded-lg border ${
              errors.phone && "border-red-500"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
            {...register("phone")}
          />
          {errors.phone && (
            <span className="text-red-500 text-xs">{errors.phone.message}</span>
          )}
        </div>

        {/* Email Address */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-400">Email Address</label>
          <input
            type="email"
            className={`bg-gray-100 py-2 px-4 mt-2 rounded-lg border ${
              errors.email && "border-red-500"
            } focus:outline-none focus:ring-2 focus:ring-primary`}
            {...register("email")}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition"
      >
        Submit
      </button>
    </form>
  );
};

export default BillingDetail;
