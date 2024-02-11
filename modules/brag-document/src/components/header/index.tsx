import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@brag-document/ui';
import { NotebookPen } from 'lucide-react';
import { FormAddItem } from '../form-add-item';

export const Header = () => {
  return (
    <header className="p-4 border-b border-stone-800 grid grid-cols-3">
      <div className="flex justify-center items-center col-start-2">
        <h1 className="text-xl text-white font-bold">Brag document</h1>
        <NotebookPen className="ml-2" size={20} color="white" />
      </div>
      <div className="col-start-3 justify-end">
        <Dialog>
          <DialogTrigger>
            <Button>Adicionar</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Adicionar item</DialogTitle>
              <DialogDescription>
                <FormAddItem />
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </header>
  );
};
