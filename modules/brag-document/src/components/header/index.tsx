import { NotebookPen } from 'lucide-react';

import {
  Button,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@brag-document/ui';
import { useState } from 'react';
import { FormAddItem } from '../form-add-item';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <header className="p-4 border-b border-stone-800 grid grid-cols-3 relative z-10">
      <div className="flex justify-center items-center col-start-2">
        <h1 className="text-xl text-white font-bold">Brag document</h1>
        <NotebookPen className="ml-2" size={20} color="white" />
      </div>
      <div className="col-start-3 justify-self-end">
        <Button onClick={() => setIsModalOpen(true)}>Adicionar</Button>
      </div>

      <Dialog open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar item</DialogTitle>
            <DialogDescription>
              <FormAddItem />
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
};
