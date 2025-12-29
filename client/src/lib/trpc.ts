import { createTRPCReact, httpBatchLink } from "@trpc/react-query";
import { createTRPCClient } from '@trpc/client';
import type { AppRouter } from "../../../server/routers";
import superjson from 'superjson';

export const trpc = createTRPCReact<AppRouter>();

// Vanilla client for use outside React components
export const trpcClient = createTRPCClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc',
      transformer: superjson,
    }),
  ],
});
