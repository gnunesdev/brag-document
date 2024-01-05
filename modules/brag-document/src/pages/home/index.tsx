import { Header } from '../../components/header';

export const Home = () => {
  return (
    <div className="w-screen h-screen bg-gray-900 text-white">
      <Header />
      <div className="w-full flex flex-col items-center m-9">
        <div className="w-full max-w-3xl border border-gray-800 p-4 text-lg">
          <p>Adicionar item</p>
        </div>
      </div>
    </div>
  );
};
