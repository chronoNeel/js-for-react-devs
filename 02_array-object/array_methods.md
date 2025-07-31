## Javscript Array Methods

This documentation provides a comprehensive overview of key Javascript array methods: find, findIndex, filter, slice, splice, concat, push, map and reduce. Each method is explained with syntax and example code. 

## find 
Used to retrieve the first element in an array that satisfies a provided testing funcion. 

**Syntax**
```javascript
array.find(function(currentValue, index, arr),thisValue)
```

**Examples**
1. **Finding a number in an Array**

```javascript
const numebers = [1, 5, 9, 234, 11];
const found = numbers.find (element => element > 10);
console.log (found); // Output: 234
```

2. **Finding an Object in an Array**

```javascript
const students = [
  { id: 001, name: 'Alex', age: 22 },
  { id: 002, name: 'Ibrahim', age: 32 },
  { id: 003, name: 'Rubi', age: 27 }
];
const student = students.find ((item) => {
    return item.age > 25;
})
console.log (student); // Output: { id: 2, name: 'Ibrahim', age: 32 }
```

3. **Using index and array Parameters**

```javascript
const array = [10, 20, 30, 20, 50];
const value = array.find ((element, index, array) => {
    console.log (`Element: ${element}, Index: ${index}, Array: ${array}`);
    return element === 20;
})
console.log(value);

// Output:
// Element: 10, Index: 0, Array: 10,20,30,20,50
// Element: 20, Index: 1, Array: 10,20,30,20,50
// 20
```

4. **Using thisArg**

```javascript
const obj = {
    threshold: 50,
}
const arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const value = arr.find (function (element) {
    return element > this.threshold;
}, obj); // This won't work without the context object

console.log (value); // Output: 60
```


## findIndex

The `findIndex` method returns the index of the first object that satisfies the callback function. If not element is found it returns `-1`.

**Syntax**
```javascript
array.findIndex(function(currentValue, index, arr), thisValue)
```

**Examples**

1. **Finding the index of a Number.**
```javascript
const numbers = [5, 12, 8, 130, 44];
const index = numbers.findIndex(element => element > 10);
console.log(index); // Output: 1
```

2. **Finding the Index of an Object**
```javascript
const students = [
  { id: 1, name: 'Alex', age: 22 },
  { id: 2, name: 'Ibrahim', age: 32 },
  { id: 3, name: 'Rubi', age: 27 }
];

const index = students.findIndex(student => student.id == 1);
console.log(index); // 0
```
Rest use cases are same as find method.


## filter
The `filter` method creates a new array with all elements that passes the test implemented by the callback function. 

**Syntax**
```javascript
array.filter*(function(currentValue, index, arr), thisValue)
```

**Examples**

1. **Filtering Numbers**

```javascript
const numbers = [5, 12, 8, 130, 44];
const filtered = numbers.filter(element => element > 10);
console.log(filtered); // Output: [12, 130, 44]
```

2. **Filtering Objects**
```javascript
const students = [
  { id: 1, name: 'Alex', age: 22 },
  { id: 2, name: 'Ibrahim', age: 32 },
  { id: 3, name: 'Rubi', age: 27 }
];

const filtered = students.filter (std => std.age > 23);;
console.log (filtered); // [{ id: 2, name: 'Ibrahim', age: 32 }, { id: 3, name: 'Rubi', age: 27 }]
```

3. **Using Index and Array Parameters**
```javascript
const arr = [10, 20, 30, 40, 50];
const filtered = arr.filter ((value, index, array) => {
    return value > index * 15;
})
console.log (filtered); // [ 10, 20 ]
```


## slice

The `slice` method returns a shallow copy of a potion of an array into a new array, without modifying the original array. 

**Syntax**

array.slice(start, end)

**Examples**

1. **Basic Slicing**

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.slice (2, 5);
console.log (result); // [ 3, 4, 5 ]
```

2. **Omitting `end`**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.slice (2);
console.log (result); // [ 3, 4, 5, 6 ]
```

3. **Negative Indices**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const result = numbers.slice (2, -1);
console.log (result); // [ 3, 4, 5 ]
```

4. Shallow Copy of Objects
```javascript
const students = [
    { id : 1, name : 'Alex'},
    { id : 2, name : 'Haley'},
    { id : 3, name : 'Manny'},
];

const sliced = students.slice (0, 2);
sliced[0].name = "Alex Updated";
console.log (sliced);
console.log (students);


// Output : 
// [ { id: 1, name: 'Alex Updated' }, { id: 2, name: 'Haley' } ]
// [
//   { id: 1, name: 'Alex Updated' },
//   { id: 2, name: 'Haley' },
//   { id: 3, name: 'Manny' }
// ]
```
The `slice()` method creates a shallow copy, so object references are shared, and modifying an object in the sliced array affects the original.

5. **Using with Strings (Array-like Objects)**

```javascript
const numbers = [1, 2, 3];
const copy = numbers.slice();
console.log(copy); // Output: [1, 2, 3]
```

## splice

The `splice` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It changes the main array

**Syntax**
```javascript
array.splice(index, count, item1, ....., itemX)
```

**Examples**

1. **Adding Elements After Slicing**

```js
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const sliced = fruits.splice(2, 1, "Lemon", "Kiwi");
console.log (fruits, sliced); // [ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango' ] [ 'Apple' ]
```

2. **Using with Array of Objects**

```js
const students = [
    { id : 1, stdName : 'Nihal'},
    { id : 2, stdName : 'Billal'},
    { id : 3, stdName : 'Forhad'}
];

const removed = students.splice (1, 1, { id : 4, stdName : 'Bokor'});
console.log (removed); // [ { id: 2, stdName: 'Billal' } ]
console.log (students); // [
                        //   { id: 1, stdName: 'Nihal' },
                        //   { id: 4, stdName: 'Bokor' },
                        //   { id: 3, stdName: 'Forhad' }
                        // ]
```


## map 

`map()` creates a new array from calling a function for every array element. It does not change the original array. 

**Syntax**

```js
array.map(function(currentValue, index, arr), thisValue)
```

**Example**

1. Transforming Numbers
```js
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(element => element * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
console.log(numbers); // Output: [1, 2, 3, 4] (original array unchanged)
```

2. Transforming Objects

```js
const students = [
    { id : 1, stdName : 'Nihal'},
    { id : 2, stdName : 'Billal'},
    { id : 3, stdName : 'Forhad'}
];

studentName = students.map ((item) => item.stdName);
console.log (studentName); // [ 'Nihal', 'Billal', 'Forhad' ]
```

3. Using `thisArg`

```js
const obj = {mul : 10};
const numbers = [ 1, 2, 3 ];

const result = numbers.map (function (n) {
    return n * this.mul;
}, obj);

console.log (result); // [ 10, 20, 30 ]
```


4. Sparse Arrays
```js
const numbers = [ 1, , 3 ];

const result = numbers.map ((n) => n * 10);
console.log (result); // [ 10, <1 empty item>, 30 ]
```
`map()` does not call the callback for empty slots. 


## Reduce

The `reduce()` method executes a reducer function for array element. It eturns a single value: the function's accumulated result.


**Syntax**

```js
array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
```

1. **Summing Numbers**
```js
const numbers = [ 1, 2, 3 ];

const result = numbers.reduce ((accumulator, currentValue) => {
    console.log (accumulator, currentValue);
        return accumulator + currentValue
    }, 0);
console.log ("The Summation is " + result); 
// Output:
// 0 1
// 1 2
// 3 3
// The Summation is 6
```

2. Summing Without `initialValue`

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum); // Output: 10
```
3. Using `index` and `array`

```js
const numbers = [10, 20, 30];
const result = numbers.reduce((acc, curr, index, arr) => {
  console.log(`Index: ${index}, Array: ${arr}`);
  return acc + curr;
}, 0);
console.log(result); // Output: 60
// Logs:
// Index: 0, Array: 10,20,30
// Index: 1, Array: 10,20,30
// Index: 2, Array: 10,20,30
```

4. Flattening an Array

```js
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flatArray = nestedArray.reduce ((acc, curr) => acc.concat (curr), []);
console.log (flatArray); // [ 1, 2, 3, 4, 5, 6 ]
```

5. Grouping Objects

```js
const students = [
  { name: 'Alex', grade: 'A' },
  { name: 'Ibrahim', grade: 'B' },
  { name: 'Rubi', grade: 'A' }
];

const grouped = students.reduce ((acc, curr) => {
    acc [curr.grade] = acc [curr.grade] || [];
    acc [curr.grade].push (curr.name);
    return acc; // update the accumulator
}, {});

console.log (grouped); // Output: { A: ['Alex', 'Rubi'], B: ['Ibrahim'] }
```