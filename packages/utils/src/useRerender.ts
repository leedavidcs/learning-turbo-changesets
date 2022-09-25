import { useCallback, useState } from "react";

const stateChanger = (state: number) => (state + 1) % Number.MAX_SAFE_INTEGER;

const useRerender = () => {
	const [, setState] = useState<number>(0);

	return useCallback(() => {
		setState(stateChanger);
	}, []);
};

export { useRerender };
