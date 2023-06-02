import { z } from "zod";

const phoneRegex = /^(\(\d{2}\) )?\d{4,5}-\d{4}$/;

export const registerSchema = z.object({
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
  password: z
    .string()
    .min(8, "Tamanho mínimo de 8 caracteres*")
    .max(30, "Tamanho máximo de 30 caracteres*")
    .regex(/.*[A-Z].*/, { message: "Precisa ter uma letra maiúscula*" })
    .regex(/.*[a-z].*/, { message: "Precisa ter uma letra minúscula*" })
    .regex(/.*\d.*/, { message: "Precisa conter um número*" })
    .regex(/.*[#?!@$%^&*-].*/, {
      message: "Precisa ter um caractere especial*",
    }),
  phoneNumber: z.string().refine((value) => phoneRegex.test(value), {
    message: "Número de telefone inválido",
  }),
});

export type RegisterData = z.infer<typeof registerSchema>;
