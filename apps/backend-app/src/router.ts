import { SchemaItem, addItemSchema } from '@brag-document/shared';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

import { db } from './prisma';

type User = {
  id: string;
  name: string;
  bio?: string;
};

const users: Record<string, User> = {};

export const t = initTRPC.create({});

/**
 * TODO
 * Investigate why in trpc v11+ all input subtypes are being cast to optional fields.
 * Currently casting all of them manually to required
 */

export const appRouter = t.router({
  getUserById: t.procedure.input(z.string()).query(async (opts) => {
    const user = await db.user.findUnique({
      where: { email: opts.input },
    });
    return user;
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
  createItem: t.procedure.input(addItemSchema).mutation(async (opts) => {
    const item = { ...opts.input };

    const description = item.description;
    const fromDate = new Date(item.date);
    const values = item.cultureValue;

    const createItem = await db.item.create({
      data: {
        description,
        fromDate,
        values: {
          create: values.map((value) => ({ name: value })),
        },
        authorId: 1,
      },
    });

    return createItem;
  }),
});

export type AppRouter = typeof appRouter;
