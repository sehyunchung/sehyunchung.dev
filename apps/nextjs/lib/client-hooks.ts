"use client";

import * as React from "react";

export function useMounted() {
	const [mounted, setMounted] = React.useState(false);
	React.useEffect(() => setMounted(true), []);
	return mounted;
}

export function useSyncedState<T>(client: T, server?: T) {
	const [state, setState] = React.useState(server ?? client);
	React.useEffect(() => {
		setState(client);
	}, [client]);
	return state;
}
