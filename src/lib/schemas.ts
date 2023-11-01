import { z } from "zod";

export const emailSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Must be 3 or more characters long" })
    .max(50, { message: "Less than 50 characters" }),
  email: z.string().email("Invalid email address"),
  subject: z.string().min(5, { message: "min length is 5" }).max(150),
  message: z.string().min(10, { message: "min length is 10" }).max(1000),
});
