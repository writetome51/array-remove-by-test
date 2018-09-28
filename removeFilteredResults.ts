import { getAndRemoveFilteredResults } from '../get/getAndRemoveFilteredResults';


export function removeFilteredResults(testFunction, array): void {
	getAndRemoveFilteredResults(testFunction, array);
}