import { EmptyState } from '../../components/empty-state';
import { FormAddItem } from '../../components/form-add-item';
import { Header } from '../../components/header';
import { ListItems } from '../../components/list-items';

export const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-stone-900 font-sans">
      <div className="flex max-w-5xl flex-col mx-auto">
        <Header />
        <EmptyState />
        <ListItems />
      </div>
    </div>
  );
};
