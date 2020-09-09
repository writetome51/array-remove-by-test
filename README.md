# removeByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;test: (value, index?, array?) => boolean,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;useRemovedItem?: (<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value, index?, array?<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;) => void<br>):  void

Removes any item in `array` that passes a `test`.  
If you use the optional callback `useRemovedItem()`, remember that this function   
removes items in descending index-order, i.e., item with index 0 is removed last.

## Example
```js
let arr = [1,2,3,4,5,6,7,8,9,10];

removeByTest((item) => (item % 2) === 0,  arr);
console.log(arr);
// [1,3,5,7,9]

  
arr = [ [10, 2, 3], [2, 3, 4], 1, 6, false, [10, 20] ];

removeByTest(
    (item) => (Array.isArray(item) && item[0] === 10),
    arr
);
console.log(arr);
// [ [2, 3, 4], 1, 6, false ]


// Collect the indexes of removed items:

arr = [10, 1, 20, 2, 30, 3, 40, 4];

let found = [];
removeByTest(
    (value) => value >= 10, 
    arr, 
    (value, index) => found.push(index)
);
console.log(found);
// [ 6, 4, 2, 0 ] 
// (items removed in descending index-order)
```

## Installation
```bash
npm i @writetome51/array-remove-by-test
```

## Loading
```js
import {removeByTest} from '@writetome51/array-remove-by-test';
```
