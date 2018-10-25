"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var removeFilteredResults_1 = require("./removeFilteredResults");
var arrays_match_1 = require("@writetome51/arrays-match");
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Test 1
removeFilteredResults_1.removeFilteredResults(function (item) { return item > 4; }, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4]))
    console.log('test 1 passed');
else
    console.log('test 1 FAILED');
// Test 2
arr = ['', 'a', 'bb', 'ccc', 'hello everyone', 'lalalalalala', 'the the the the'];
removeFilteredResults_1.removeFilteredResults(function (item) { return item.length > 3; }, arr);
if (arrays_match_1.arraysMatch(arr, ['', 'a', 'bb', 'ccc']))
    console.log('test 2 passed');
else
    console.log('test 2 FAILED');
// Test 3
arr = ['', 'a', 'bb', 'ccc', 'hello everyone', 'lalalalalala', 'the the the the', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
removeFilteredResults_1.removeFilteredResults(function (item) {
    return ((typeof item === 'string' && item.length > 3) || (typeof item === 'number' && item > 4));
}, arr);
if (arrays_match_1.arraysMatch(arr, ['', 'a', 'bb', 'ccc', 1, 2, 3, 4]))
    console.log('test 3 passed');
else
    console.log('test 3 FAILED');
// Test 4: if anything but a function is passed as first arg, error is triggered:
var errorTriggered = false;
try {
    removeFilteredResults_1.removeFilteredResults({}, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 4 passed');
else
    console.log('test 4 FAILED');
// Test 5: if anything but an array is passed as second arg, error is triggered:
errorTriggered = false;
try {
    removeFilteredResults_1.removeFilteredResults(function (item) { return item === 1; }, {});
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered)
    console.log('test 5 passed');
else
    console.log('test 5 FAILED');
// Test 5: if anything but an array is passed as second arg, error is triggered:
arr = [1, 2, 3, 4, 5];
removeFilteredResults_1.removeFilteredResults(function (item) {
    var x = item;
}, arr);
if (arrays_match_1.arraysMatch(arr, [1, 2, 3, 4, 5]))
    console.log('test 6 passed');
else
    console.log('test 6 FAILED');
