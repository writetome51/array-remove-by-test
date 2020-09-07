import { getAndRemoveByTest } from '@writetome51/array-get-and-remove-by-test';


export function removeByTest(
	test: (value: any, index?: number, array?: any[]) => boolean,
	array
): void {
	getAndRemoveByTest(test, array);
}
