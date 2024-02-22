import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '../../../../apps/brag-document-backend/src/router';

export const trpc = createTRPCReact<AppRouter>();
