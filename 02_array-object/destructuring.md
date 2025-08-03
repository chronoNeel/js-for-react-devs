# JavaScript Destructuring

Destructuring allows to extract multiple values from data stored in arrays or objects and assign them to variables in a single statement. It is particularly useful for working with complex data structures, function arguments, or API responses

### **Syntax Overview**
- **Array Destructuring**: Uses square brackets `[]` to unpack elements by position.
```js
let [firstName, lastName] = person;
```
- **Object Destructuring**: Uses curly braces `{}` to unpack properties by name.
```js
let {firstName, lastName} = person;
```

---

### **1. Basic Array Destructuring**

```js
const numbers = [1, 2, 3];
const [a, b, c] = numbers;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```


### **2. Skipping Elements**

```js
const numbers = [1, 2, 3];
const [a, , c] = numbers;

console.log(a); // 1
console.log(c); // 3
```

### **3. Rest Operator in Array Destructuring**

```js
const numbers = [3, 4, 6, 9, 202, 1];
const [a, b, ...rest] = numbers;

console.log (a); // 3
console.log (b); // 4
console.log (rest); // [ 6, 9, 202, 1 ]
```

### **3. Rest Operator in Array Destructuring**

```js
const numbers = [3, 4, 6, 9, 202, 1];
const [a, b, ...rest] = numbers;

console.log (a); // 3
console.log (b); // 4
console.log (rest); // [ 6, 9, 202, 1 ]
```

### **4. Default Values in Array Destructuring**

```js
const numbers = [1];
const [a, b = 2] = numbers;
console.log (a); // 1
console.log (b); // 2
```

### **5. Nested Array Destructuring**

```js
const nested = [ 1, [ 2, 3], 6];
const [a, [b, c], d] = nested;
console.log (a); // 1
console.log (b); // 2
console.log (c); // 3
console.log (d); // 4
```

### **6. Swapping Variables**

```js
let a = 5, b = 3;
[a, b] = [b, a];
console.log (a); // 3
console.log (b); // 5
```

### **7. Basic Object Destructuring**

```js
const person = { name: 'Alice', age: 25 };
const {name, age} = person;

console.log(name); // Alice
console.log(age); // 25
```

### **8. Renaming Variables**

```js
const person = { name: 'Alice', age: 25 };
const {name : personName, age : personAge } = person;

console.log(personName); // Alice
console.log(perosonAge); // 25
```


### **9. Default Values in Object Destructuring**

```js
const person = { name: 'Alice', age: 30, address: "Dhaka" };
const { name : personName, ... rest} = person;

console.log(personName); // Alice
console.log(rest); // { age: 30, address: 'Dhaka' }
```

### **10. Nested Object Destructuring**

```js
const person = {
  name: 'Alice',
  address: { city: 'Wonderland', zip: 12345 }
};
const { name : personName, address : { city, zip }} = person;

console.log(personName); // Alice
console.log(city); // Wonderland
console.log(zip); // 12345
```

### **11. Array Destructuring in Parameters**

```js
function printNumbers([first, second]) {
  console.log(first, second);
}

printNumbers([1, 2]); // 1 2
```

### **12. Object Destructuring in Parameters**

```js
function printPerson({ name, age = 30 }) {
  console.log(`Name: ${name}, Age: ${age}`);
}

printPerson({ name: 'Alice' }); // Name: Alice, Age: 30
```