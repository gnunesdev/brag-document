import { FormAddItem } from '../../components/form-add-item';
import { Header } from '../../components/header';

export const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-stone-900 font-sans">
      <Header />
      <FormAddItem />
    </div>
  );
};
