import * as z from "zod";

export const SignupValidation = z.object({
    name: z.string().min(2, { message: 'Name must contain at least 2 characters'  }),
    username: z.string().min(6, { message: 'Username must contain at least 6 characters'}),
    email: z.string().email(),
    password: z.string().min(8, { message: 'Passwords must contain at least 8 characters'}),
  });