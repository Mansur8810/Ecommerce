import { number, z } from "zod";

export const SignupSchema = z.object({
  name: z.string().min(2, "Need Min. 2 Characters"),
  email: z.string().email(),
  password: z.string().min(8, "Password length must be min. 8"),
});
export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, "Password length must be min. 8"),
});

export const ContactSchema = z.object({
  name: z.string().min(2, "Need Min. 2 Characters"),
  email: z.string().email(),
  number: z.string().min(10, "Phone number length must be min. 10"),
  textarea: z.string().min(10, "Need Min. 10 Characters"),
});

export const AccountSchema = z.object({
  name: z.string().min(2, "Need Min. 2 Characters"),
  lastname: z.string().min(2, "Need Min. 2 Characters"),
  email: z.string().email(),
  address: z.string().min(10, "Address length must be min. 5"),
  curpasswrod : z.string().min(5,"Currrent Passwrod lenth must be min.5"),
  newpassword : z.string().min(8,"Password lenght must be min.8"),
  confirmPassword : z.string(8 , "password length must be min. 8"),
}).refine((data) => data.newpassword === data.confirmPassword, {
  message : "Password don't match",
  path : ["confirmPassword"],
});

export const BillingSchema = z.object({
  name: z.string().min(2, "Need Min. 2 Characters"),
  email: z.string().email(),
  number: z.string().min(10, "Phone number length must be min. 10"),
});
