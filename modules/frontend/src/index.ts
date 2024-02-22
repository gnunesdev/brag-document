import { router } from '../../../apps/brag-document/src/router';

// Workaround to override types in the desired module
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export * from './pages/home';

export * from './utils/trpc';
