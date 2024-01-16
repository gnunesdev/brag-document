import { Button, Input } from '@brag-document/ui';

import * as z from 'zod';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@brag-document/ui';

const formAddItemSchema = z.object({
  description: z.string().min(50),
  cultureValue: z.enum([
    'All together',
    'Empreendedorismo',
    'Cultura',
    'Inovação',
  ]),
});

type FormValues = z.infer<typeof formAddItemSchema>;

export const FormAddItem = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formAddItemSchema),
    defaultValues: {
      description: '',
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div className="w-full flex flex-col items-center m-9">
      <div className="w-full max-w-3xl border border-stone-800 p-4 text-base flex flex-col">
        <p>Adicionar item</p>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Input placeholder="" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Salvar</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
