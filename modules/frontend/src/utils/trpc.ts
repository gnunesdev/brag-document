import { createTRPCReact } from '@trpc/react-query';

import type { AppRouter } from '../../../../apps/backend-app/src/router';

export const trpc = createTRPCReact<AppRouter>();
