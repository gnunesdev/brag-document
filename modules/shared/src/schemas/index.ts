import { z } from 'zod';

export const addItemSchema = z.object({
  description: z
    .string()
    .min(10, 'Esse campo deve conter no mínimo 10 caracteres.'),
  cultureValue: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'Escolha pelo menos um valor.',
    }),
  date: z.coerce.date({
    required_error: 'É necessário adicionar uma data.',
  }),
});

export type SchemaItem = z.infer<typeof addItemSchema>;
