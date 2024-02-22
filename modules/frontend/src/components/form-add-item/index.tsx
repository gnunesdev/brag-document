import {
  Button,
  Checkbox,
  DatePicker,
  FormDescription,
  Textarea,
  cn,
} from '@brag-document/frontend/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@brag-document/frontend/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

export const formAddItemSchema = z.object({
  description: z
    .string()
    .min(10, 'Esse campo deve conter no mínimo 10 caracteres.'),
  cultureValue: z
    .array(z.string())
    .refine((value) => value.some((item) => item), {
      message: 'Escolha pelo menos um valor.',
    }),
  date: z.date({
    required_error: 'É necessário adicionar uma data.',
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
] as const;

type FormValues = z.infer<typeof formAddItemSchema>;

type Props = {
  className?: string;
};

export const FormAddItem = ({ className }: Props) => {
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
    <div
      className={cn('w-full flex flex-col items-center text-white', className)}
    >
      <div className="w-full border-stone-800 p-4 text-base flex flex-col">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="mt-4">
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      {...field}
                      placeholder="Explique melhor sobre o item que você quer adicionar"
                      className=" resize-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col mt-4 ">
                  <FormLabel className="">Data</FormLabel>
                  <FormControl>
                    <DatePicker value={field.value} onChange={field.onChange} />
                  </FormControl>
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
