To include:

import {removeFilteredResults} from '@writetome51/array-remove-filtered-results';

removeFilteredResults(testFunction, array): void

testFunction => (item, index?, array): boolean

removeFilteredResults removes items from the array that match the criteria of the test function.