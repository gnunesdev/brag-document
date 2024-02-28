import { SchemaItem } from '@brag-document/shared';

import { trpc } from '../../utils/trpc';

type Props = {
  handleSuccess: VoidFunction;
};

export const useAddItem = ({ handleSuccess }: Props) => {
  const { mutate, isPending } = trpc.createItem.useMutation({
    onSuccess: handleSuccess,
  });

  function handleCreateItem(input: SchemaItem) {
    mutate(input);
  }

  return {
    isLoading: isPending,
    handleCreateItem,
  };
};
