import { z } from "zod";

const phoneRegex = /^(\(\d{2}\) )?\d{4,5}-\d{4}$/;

export const contactSchema = z.object({
  fullName: z
    .string()
    .min(10, "Nome mínimo de 10 caracteres*")
    .max(50, "Nome máximo de 50 caracteres*")
    .nonempty("Nome obrigatório*"),
  email: z
    .string()
    .email("Email inválido*")
    .nonempty()
    .max(50, "Tamanho máximo de 50 caracteres*"),
  phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
    message: "Número de telefone inválido*",
  }),
});

export type ContactData = z.infer<typeof contactSchema>;

export const FullContactSchema = contactSchema.extend({
  id: z.string(),
  registrationDate: z.string(),
  customerId: z.string(),
});

export type FullContactData = z.infer<typeof FullContactSchema>;

export const userSchema = z.object({
  fullName: z
    .string()
    .min(10, "Nome mínimo de 10 caracteres*")
    .max(50, "Nome máximo de 50 caracteres*")
    .nonempty("Nome obrigatório*"),
  email: z
    .string()
    .email("Email inválido*")
    .nonempty()
    .max(50, "Tamanho máximo de 50 caracteres*"),
  phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
    message: "Número de telefone inválido*",
  }),
});

export type UserData = z.infer<typeof userSchema>;

export const fullUserSchema = userSchema.extend({
  id: z.string(),
  registrationDate: z.string(),
});

export type FullUserData = z.infer<typeof fullUserSchema>;
