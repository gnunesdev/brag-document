import { NotebookPen } from 'lucide-react';

export const Header = () => {
  return (
    <header className="p-4 border-b border-stone-800">
      <div className="flex justify-center items-center">
        <h1 className="text-xl text-white font-bold">Brag document</h1>
        <NotebookPen className="ml-2" size={20} color="white" />
      </div>
    </header>
  );
};
