export declare function removeByTest(
	test: (value: any, index?: number, array?: any[]) => boolean,
	array: any[],
	useRemovedItem?: (value: any, index?: number, array?: any[]) => void
): void;
