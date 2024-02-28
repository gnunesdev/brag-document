import { addItemSchema } from '@brag-document/shared';
import {
  Button,
  Checkbox,
  DatePicker,
  FormDescription,
  Textarea,
  cn,
  useToast,
} from '@brag-document/ui';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@brag-document/ui';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

import { useAddItem } from '../../hooks/services/use-add-item';

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

type FormValues = z.infer<typeof addItemSchema>;

type Props = {
  className?: string;
  onSuccess?: VoidFunction;
};

export const FormAddItem = ({ className, onSuccess }: Props) => {
  const { toast } = useToast();

  const { handleCreateItem, isLoading } = useAddItem({
    handleSuccess: () => {
      toast({
        description: 'Item adicionado com sucesso ✅',
      });

      onSuccess?.();
    },
  });

  const form = useForm<FormValues>({
    resolver: zodResolver(addItemSchema),
    defaultValues: {
      description: '',
      cultureValue: [],
    },
  });

  function onSubmit(values: FormValues) {
    handleCreateItem(values);
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

            <Button type="submit">
              {isLoading ? 'Carregando...' : 'Salvar'}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};
