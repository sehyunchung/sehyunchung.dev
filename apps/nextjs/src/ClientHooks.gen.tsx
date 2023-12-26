/* TypeScript file generated from ClientHooks.res by genType. */

/* eslint-disable */
/* tslint:disable */

import * as ClientHooksBS from './ClientHooks.res';

export type server<a> = "None" | { TAG: "Some"; _0: a };

export const useMounted: () => boolean = ClientHooksBS.useMounted as any;

export const useSyncedState: <T1>(client:T1, server:server<T1>) => T1 = ClientHooksBS.useSyncedState as any;
