# JS_notes
# Javascript

## Random
### async and defer
```js
<script src="iterations.js" async defer type="module"></script>
```
* defer - delay parsing js (till html is ready)
* async - with it js code is processed in background (doesn't block rendering of html)

### Comapring values
* `==` - allows coercion ( implicit conversion of values from one data type to another)
* `===` - doesn't allow coertion

### Logical operators
python | `and` | `or` | `not`
--- | --- | --- | ---
JS | `&&` |  `\|\|` | `!`

### Spread operator
* `...` - takes in an iterable (e.g an array) and expands it into individual elements

## Variables

x | var | let | const
--- | --- | --- | ---
redeclarecation | yes | no | no
hoisting | yes | no | no
block scope | no | yes | yes
reassignment | yes | yes | no

### Hoisting 
- moving declarations of var, named function and class to the top of the current scope \
(hoisting is disabled in function expression [when function is assigned to variable declaration])

### Shollow vs Deep Copy
```js
const a = [[1, 2], [3, 4]];
const b = a;
b[0][0] = 10;
// console.log(a); // [ [ 10, 2 ], [ 3, 4 ] ]
// console.log(b); // [ [ 10, 2 ], [ 3, 4 ] ]
b[0] = [10, 20];
// console.log(a); // [ [ 10, 20 ], [ 3, 4 ] ]
// console.log(b); // [ [ 10, 20 ], [ 3, 4 ] ]
const c = [...a]; // [ [ 10, 20 ], [ 3, 4 ] ]
c[0][0] = 100;
// console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// console.log(c); // [ [ 100, 20 ], [ 3, 4 ] ]
c[0] = [100, 200];
// console.log(a); // [ [ 100, 20 ], [ 3, 4 ] ]
// console.log(c); // [ [ 100, 200 ], [ 3, 4 ] ]

// Deep copy
const d = JSON.parse(JSON.stringify(a));
d[0][0] = 1000;
console.log(d); // [ [ 1000, 200 ], [ 3, 4 ] ]
console.log(a); // [ [ 100, 200 ], [ 3, 4 ] ]
```


## Functions
1. Named function
```js
function someName(...params) {
    // body
    return params; // optional (without return undefined)
}

console.log(someName(10));
```
2. Anonymous function
```js
const name2 = function (...params) {
    return params;
};
```
3. Arrow function
```js
const name3 = (params) => {
    return params;
};
```
--- 
4. Function expression
---
---
- NaN - Not a (correct) Number

## Map
* takes function declaration as parameter

```js
function callback(element=1, id=0, array=[1, 2, 3]) {
    return 'New value'
}

const newArray = [1, 2, 3].map(callback)
// ['New value', 'New value', 'New value']

```

## Reduce
```js
const initialValue = 0;
const callback_ = (accumulator=array[0], currentElement=array[1], id=0, array=[1, 2, 3]) => {
    const newAccumulator = accumulator + currentElement;
    return newAccumulator;
}

const newAggregationValue = [1, 2, 3].reduce(callback_, initialValue)
```

## Ternary operator
* condition ? true : false

## Arrays (object subtype)
### Methods:
1. `[1, 2, 3].concat([4, 5, 6])` - concat (łączy zbiory)
2. `[1, 2, 3].includes(2)` - includes (returns true or false) test if element exist in array
3.  `[1, 2, 3, NaN].indexOf(2)` - indexOf (return index of element or minus 1 if not found), not working with NaN
4.  `[1, 2, 3].join(',')` - join (returns string separeted by separator)
5.  `[1, 2, 3].pop()` - pop (returns last element and removes it from array)
6.  `[1, 2, 3].push(4)` - push (adds element to the end of array)
7.  `[1, 2, 3].shift()` - shift (returns first element and removes it from array)
8.  `[1, 2, 3].unshift(44)` - unshift (adds element to the beggining of array)
9.  `[1, 2, 3].slice(1, 3)` - slice (returns new array with elements from start to end)
10.  `[1, 2, 3].splice(1, 3)` - slice (returns removed elements and adds new elements in-place [params(start, deleteCount, ...item)])
11.  `[1, 2, 3].reverse()` - reverse (returns new array with elements in reversed order)
12.  `[1, 2, 3].sort(1, 3)` - sort (returns new array with elements sorted)
13.  `[1, 2, 3].toString()` - toString (returns string from given array)
14.  `[1, 2, 3].valueOf()` - valueOf (return array)
15.  `[1, 2, 3].map(x => x * 2)` - map (return new array with elements transformed by callback) - transform array
16.  `[1, 2, 3].filter(x => x > 1)` - filter (returns new array filtered by callback) - delete elements
17. `[1, 2, 3].reduce((acc, cur) => acc + cur)` - reduce (returns single value) - sum - aggregate array
18. `[1, 2, 3].reduceRight((acc, cur) => acc + cur)` - reduceRight (returns single value) - sum - aggregate array
19. `[1, 2, 3].forEach(x => console.log(x))` - forEach (returns undefined) - iterate array
20. `[1, 2, 3].some(x => x > 1)` - some (returns true or false) - test if any element passes test
21. `[1, 2, 3].every(x => x > 1)` - every (returns true or false) - test if all elements pass test
22. `[1, 2, 3].find(x => x > 1)` - find (returns first element that passes test) - find element
23. `[1, 2, 3].findIndex(x => x > 1)` - findIndex (returns index of first element that passes test) - find element index
24. `[1, 2, 3].fill(0, 1, 2)` - fill (returns new array with elements replaced) - replace elements
25. `[1, 2, 3].copyWithin(1, 2)` - copyWithin (returns new array with elements copied) - copy elements
26. `[1, 2, 3].entries()` - entries (returns iterator) - iterate array
27. `[1, 2, 3].keys()` - keys (returns iterator) - iterate array
28. `[1, 2, 3].values()` - values (returns iterator) - iterate array
29. `[1, 2, 3].flat()` - flat (returns new array with elements flattened) - flatten array
30. `[1, 2, 3].flatMap(x => [x, x * 2])` - flatMap (returns new array with elements transformed by callback)

### Copy arrays:

```js
const x = [1, 2, 3];

// Shallow copy
cosnt y = [...x];
cosnt z = x.slice();
const w = x.concat();
cosnt v = Array.from(x);

// Deep copy
const a = JSON.parse(JSON.stringify(x));
cosnt b = Object.assign([], x)
```
### Check if array

```js
Array.isArray([]); // true
```

## Asynchronous programing
1. Callback (funckaj wywołania zwrotnego)
2. Promise
3. Generators and Coroutines
4. Async / await (suntactic sugar)


## OOP
1. Abstraction (not the same as abstract class)) 
2. Inheritance (js - prototype chaining)
3. Polymorphism
4. Encapsulation (js - only public, ts - all)
    1. Access modifiers
        1. private
        2. protected
        3. public
        4. read only

### SOLID
1. Single responsibility principle - one class, one functionality
2. Open/closed principle
3. Liskov substitution principle
4. Interface segragation - logic and implementation separation
5. Dependancy inversion - parent class cannot rely on child class

## This
- a functionality 'this' references the exucution context for that call, determined entirely by how the function was c

### new keyword
1. Create a brand-new empty onject.
2. Link that object to another object.
3. Call function with 'this' se to the new object.
4. If function deas nor return an object. assume return of 'this'.

### 'this' precedence
1. Is the funciton called by new.
2. Is the function called by call() or apply()? (bind() uses aply()).
3. Is the function called on a context abject?.
4. DEFAULT: global object (exept strict mode).

### Arrow function 'this' => arrow function does not have 'this' (lexical this) (not have also arguments, super, new.target)
