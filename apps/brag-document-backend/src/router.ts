import { initTRPC } from '@trpc/server';
import { z } from 'zod';

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const t = initTRPC.create({});

export const appRouter = t.router({
  getUser: t.procedure.input(z.string()).query((opts) => {
    return users[opts.input];
  }),
  createUser: t.procedure
    .input(
      z.object({
        name: z.string().min(3),
        bio: z.string().max(142).optional(),
      })
    )
    .mutation((opts) => {
      const id = Date.now().toString();
      const user = { id, ...opts.input } as User;
      users[user.id] = user;
      return user;
    }),
});

export type AppRouter = typeof appRouter;
