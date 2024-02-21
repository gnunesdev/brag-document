import { EmptyState } from '../../components/empty-state';
import { Header } from '../../components/header';

const hasItems = false;

export const Home = () => {
  return (
    <div className="w-screen h-screen overflow-x-hidden bg-neutral-950 font-sans">
      <Header />
      {!hasItems ? (
        <EmptyState className="absolute top-0 left-0 overflow-hidden w-screen h-screen flex items-center justify-center" />
      ) : (
        <div className="flex max-w-5xl flex-col mx-auto"></div>
      )}
    </div>
  );
};
