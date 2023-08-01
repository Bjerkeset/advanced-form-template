import {z} from "zod";

export const RegisterSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(3, {message: "Name should contain at least 3 characters"})
    .max(55),
  studentId: z
    .string()
    .min(5)
    .max(5)
    .refine((val) => !isNaN(val as unknown as number), {
      message: "Student ID should be a number",
    }),
  year: z.string().min(2).max(10),
  password: z.string().min(6).max(100),
  comfirmPassword: z.string().min(6).max(100),
});
