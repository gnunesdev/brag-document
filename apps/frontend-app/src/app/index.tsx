import { trpc } from '@brag-document/frontend';
import { ThemeProvider, Toaster } from '@brag-document/ui';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from '@tanstack/react-router';
import { httpBatchLink } from '@trpc/client';
import { useState } from 'react';

import { router } from '../router';

export const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc',
          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    })
  );

  return (
    <div>
      <trpc.Provider client={trpcClient} queryClient={queryClient}>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Toaster />
            <RouterProvider router={router} />
          </ThemeProvider>
        </QueryClientProvider>
      </trpc.Provider>
    </div>
  );
};
