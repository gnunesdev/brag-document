export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-5xl bold">oops!</h2>
      <img
        className="max-w-sm mt-8"
        src="/assets/thinking.svg"
        alt="Mulher ao redor de seus pensamentos"
      />
      <p className="mt-8 max-w-md text-center text-xl">
        parece que não tem nenhum item cadastrado, que tal{' '}
        <strong
          role="button"
          className="text-red-500 cursor-pointer hover:text-red-700 transition-colors"
        >
          adicionar
        </strong>{' '}
        o primeiro?
      </p>
    </div>
  );
};
