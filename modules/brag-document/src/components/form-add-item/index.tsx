import { Button, Checkbox, FormDescription, Input } from '@brag-document/ui';

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
  description: z.string().min(10),
  cultureValue: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'Escolha pelo menos um valor.',
    }),
});

const cultureValues = [
  {
    id: 'all-together',
    label: 'All together',
  },
  {
    id: 'empreendedorismo',
    label: 'Empreendedorismo',
  },
  {
    id: 'cultura',
    label: 'Cultura',
  },
  {
    id: 'inovacao',
    label: 'Inovação',
  },
  {
    id: 'downloads',
    label: 'Downloads',
  },
  {
    id: 'documents',
    label: 'Documents',
  },
] as const;

type FormValues = z.infer<typeof formAddItemSchema>;

export const FormAddItem = () => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formAddItemSchema),
    defaultValues: {
      description: '',
      cultureValue: [],
    },
  });

  function onSubmit(values: FormValues) {
    console.log(values);
  }

  return (
    <div className="w-full flex flex-col items-center m-9 text-white">
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
                    <Input placeholder="" {...field} className="text-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cultureValue"
              render={() => (
                <FormItem>
                  <div className="mb-4">
                    <FormLabel className="text-sm">Deck JIT</FormLabel>
                    <FormDescription>
                      Quais valores englobam esse item?
                    </FormDescription>
                  </div>
                  {cultureValues.map((culture) => (
                    <FormField
                      key={culture.id}
                      control={form.control}
                      name="cultureValue"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={culture.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(culture.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([
                                        ...field.value,
                                        culture.id,
                                      ])
                                    : field.onChange(
                                        field.value?.filter(
                                          (item) => item !== culture.id
                                        )
                                      );
                                }}
                              />
                            </FormControl>
                            <FormLabel className="text-sm font-normal">
                              {culture.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
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
