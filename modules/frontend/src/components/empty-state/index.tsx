type Props = {
  className?: string;
};

export const EmptyState = ({ className }: Props) => {
  return (
    <div className={className}>
      <div className="flex flex-col items-center">
        <img
          className="max-w-4xl mt-8"
          src="/assets/empty-state-background.svg"
          alt="Mulher ao redor de seus pensamentos"
        />
        <h3 className="text-2xl bold mt-8">Adicione seu primeiro item</h3>
        <p className="mt-4 max-w-xl text-center">
          Comece{' '}
          <strong className="text-red-500 transition-colors">
            adicionando
          </strong>{' '}
          o primeiro item do seu brag document a fim de manter atualizado todos
          os seus feitos ao decorrer do ciclo.
        </p>
      </div>
    </div>
  );
};
