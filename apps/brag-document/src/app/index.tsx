import { Home } from '@brag-document';
import { ThemeProvider } from '@brag-document/ui';

export const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Home />
      </ThemeProvider>
    </div>
  );
};
