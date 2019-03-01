# removeByTest(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;testFunction,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>):  void

Removes any item in `array` that passes a `testFunction`.  
`testFunction = function(value,  index?,  theArray?): boolean`

## Example
```
let arr = [1,2,3,4,5,6,7,8,9,10];

removeByTest((item) => (item * 2) === 10,  arr);
// arr is now [1,2,3,4,6,7,8,9,10]
    
arr = [ [10, 2, 3], [2, 3, 4], 1, 6, false, [10, 20] ];

removeByTest(
    (item) => (Array.isArray(item) && item[0] === 10),
    arr
);
// arr is now [ [2, 3, 4], 1, 6, false ]
```

## Installation
```bash
npm install @writetome51/array-remove-by-test
```

## Loading
```
// If using TypeScript:
import {removeByTest} from '@writetome51/array-remove-by-test';
// If using ES5 JavaScript:
var removeByTest = require('@writetome51/array-emove-by-test').removeByTest;
```
