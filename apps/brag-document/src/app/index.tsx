import { Home } from '@brag-document';
import { ThemeProvider } from '@brag-document/ui';
import { RouterProvider } from '@tanstack/react-router';
import { router } from '../router';

export const App = () => {
  return (
    <div>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterProvider router={router} />
      </ThemeProvider>
    </div>
  );
};
