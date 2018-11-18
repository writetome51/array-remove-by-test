import { removeFilteredResults } from './removeFilteredResults';
import { arraysMatch } from '@writetome51/arrays-match';


let arr: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Test 1
removeFilteredResults((item) => item > 4, arr);
if (arraysMatch(arr, [1, 2, 3, 4])) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2
arr = ['', 'a', 'bb', 'ccc', 'hello everyone', 'lalalalalala', 'the the the the'];
removeFilteredResults((item) => item.length > 3, arr);
if (arraysMatch(arr, ['', 'a', 'bb', 'ccc'])) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3
arr = ['', 'a', 'bb', 'ccc', 'hello everyone', 'lalalalalala', 'the the the the', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeFilteredResults((item) => {
	return ((typeof item === 'string' && item.length > 3) || (typeof item === 'number' && item > 4));
}, arr);
if (arraysMatch(arr, ['', 'a', 'bb', 'ccc', 1, 2, 3, 4])) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: if anything but a function is passed as first arg, error is triggered:
let errorTriggered = false;
try {
	removeFilteredResults({}, arr);
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: if anything but an array is passed as second arg, error is triggered:
errorTriggered = false;
try {
	removeFilteredResults((item) => item === 1, {});
}
catch (e) {
	errorTriggered = true;
}
if (errorTriggered) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 5: if callback function does not return anything, array should not be changed:
arr = [1,2,3,4,5];
removeFilteredResults((item) => {
	let x = item;
}, arr);

if (arraysMatch(arr, [1,2,3,4,5])) console.log('test 6 passed');
else console.log('test 6 FAILED');
