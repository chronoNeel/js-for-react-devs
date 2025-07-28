Below is the full content for the `JavaScript_Data_Types_and_Type_Coercion.md` file, which is the comprehensive manual for JavaScript data types and type coercion as previously provided. This file is designed to be stored in the `docs/` directory of your GitHub repository. The content is identical to the earlier manual, ensuring consistency, and is wrapped in the required ````` tag with the same `artifact_id` to indicate it is the same artifact being reused.

```

# JavaScript Data Types and Type Coercion Manual

This manual provides a detailed overview of JavaScript data types and type coercion, including examples to demonstrate their usage and behavior.

## 1. JavaScript Data Types

JavaScript has two main categories of data types: **primitive** and **non-primitive (reference)** types.

### 1.1 Primitive Data Types
Primitive data types are immutable and stored directly in memory. There are six primitive types in JavaScript:

#### 1.1.1 Number
Represents both integer and floating-point numbers. It also includes special values like `Infinity`, `-Infinity`, and `NaN`.

```javascript
let integer = 42;
let float = 3.14;
let notANumber = NaN;
let infinity = Infinity;

console.log(typeof integer); // "number"
console.log(typeof float); // "number"
console.log(typeof notANumber); // "number"
console.log(typeof infinity); // "number"
```

#### 1.1.2 String
Represents a sequence of characters enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.

```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}!`;

console.log(typeof singleQuote); // "string"
console.log(typeof templateLiteral); // "string"
```

#### 1.1.3 Boolean
Represents a logical value: `true` or `false`.

```javascript
let isActive = true;
let isCompleted = false;

console.log(typeof isActive); // "boolean"
```

#### 1.1.4 Undefined
Represents a variable that has been declared but not assigned a value.

```javascript
let notAssigned;
console.log(notAssigned); // undefined
console.log(typeof notAssigned); // "undefined"
```

#### 1.1.5 Null
Represents the intentional absence of any object value.

```javascript
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a historical bug in JavaScript)
```

#### 1.1.6 Symbol
Represents a unique and immutable identifier, often used as object property keys.

```javascript
let sym1 = Symbol('id');
let sym2 = Symbol('id');

console.log(sym1 === sym2); // false (Symbols are unique)
console.log(typeof sym1); // "symbol"
```

### 1.2 Non-Primitive (Reference) Data Types
Non-primitive types are mutable and stored as references in memory. The primary non-primitive types are:

#### 1.2.1 Object
Represents a collection of key-value pairs. Objects can include arrays, functions, and other objects.

```javascript
let person = {
  name: 'Alice',
  age: 25
};

console.log(typeof person); // "object"
```

#### 1.2.2 Array
A special type of object used to store ordered lists of values.

```javascript
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object"
console.log(Array.isArray(numbers)); // true
```

#### 1.2.3 Function
A callable object that executes a block of code.

```javascript
function greet() {
  return 'Hello!';
}

console.log(typeof greet); // "function"
```

## 2. Type Coercion

Type coercion is the automatic or explicit conversion of values from one data type to another. JavaScript performs coercion in two ways: **implicit** and **explicit**.

### 2.1 Implicit Type Coercion
Implicit coercion occurs when JavaScript automatically converts types during operations, such as with operators like `+`, `-`, `==`, or `<`.

#### 2.1.1 String Coercion
When a number or boolean is used with the `+` operator alongside a string, JavaScript converts the non-string value to a string.

```javascript
let num = 42;
let str = "The answer is " + num;
console.log(str); // "The answer is 42"
console.log(typeof str); // "string"

let bool = true;
console.log(bool + " is a boolean"); // "true is a boolean"
```

#### 2.1.2 Numeric Coercion
Arithmetic operators (except `+` with strings) trigger conversion to numbers.

```javascript
let strNum = "123";
console.log(strNum - 0); // 123 (string to number)
console.log(typeof (strNum - 0)); // "number"

let bool = true;
console.log(bool * 2); // 2 (true coerces to 1)
```

#### 2.1.3 Boolean Coercion
In logical contexts (e.g., `if` statements, `&&`, `||`), values are coerced to booleans. Falsy values include `0`, `""`, `null`, `undefined`, `NaN`, and `false`. All other values are truthy.

```javascript
let value = 0;
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // Outputs "Falsy"
}

console.log(!!"Hello"); // true (string to boolean)
console.log(!!0); // false
```

#### 2.1.4 Loose Equality (`==`) vs. Strict Equality (`===`)
The `==` operator performs type coercion, while `===` checks both value and type.

```javascript
console.log(42 == "42"); // true (string "42" coerced to number)
console.log(42 === "42"); // false (different types)

console.log(null == undefined); // true (special case in loose equality)
console.log(null === undefined); // false
```

### 2.2 Explicit Type Coercion
Explicit coercion involves manually converting types using functions or operators.

#### 2.2.1 To String
Use `String()`, `.toString()`, or string concatenation.

```javascript
let num = 42;
console.log(String(num)); // "42"
console.log(num.toString()); // "42"
console.log(num + ""); // "42"
```

#### 2.2.2 To Number
Use `Number()`, `parseInt()`, `parseFloat()`, or unary plus (`+`).

```javascript
let str = "123.45";
console.log(Number(str)); // 123.45
console.log(parseInt(str)); // 123
console.log(parseFloat(str)); // 123.45
console.log(+str); // 123.45
```

#### 2.2.3 To Boolean
Use `Boolean()` or double negation (`!!`).

```javascript
let value = "Hello";
console.log(Boolean(value)); // true
console.log(!!value); // true

let zero = 0;
console.log(Boolean(zero)); // false
console.log(!!zero); // false
```

### 2.3 Common Coercion Pitfalls
Type coercion can lead to unexpected results if not handled carefully.

```javascript
console.log("2" + 2); // "22" (string concatenation)
console.log("2" - 2); // 0 (numeric coercion)
console.log([] + {}); // "[object Object]" (array and object to strings)
console.log({} + []); // "[object Object]" (object to string, array to empty string)
```

### 2.4 Best Practices
- Use `===` and `!==` to avoid unexpected coercion.
- Explicitly convert types when clarity is needed.
- Be cautious with operators that trigger coercion (e.g., `+` with strings).
- Test edge cases, especially with `null`, `undefined`, or empty values.

## 3. Practical Examples

### 3.1 Combining Data Types
Mixing data types in operations often triggers coercion.

```javascript
let price = "99.99";
let tax = 0.1;
let total = parseFloat(price) * (1 + tax);
console.log(total); // 109.989
```

### 3.2 Checking Types
Use `typeof`, `instanceof`, or `Array.isArray()` to verify types.

```javascript
let value = [1, 2, 3];
console.log(typeof value); // "object"
console.log(Array.isArray(value)); // true
console.log(value instanceof Array); // true
```

### 3.3 Handling User Input
User inputs are often strings, requiring explicit conversion.

```javascript
let userInput = "42";
let age = parseInt(userInput);
if (isNaN(age)) {
  console.log("Invalid number");
} else {
  console.log("Age:", age); // Age: 42
}
```

## 4. Summary
- JavaScript has six primitive types (`Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`) and non-primitive types (`Object`, `Array`, `Function`).
- Type coercion can be implicit (automatic) or explicit (manual).
- Implicit coercion occurs in operations like `+`, `==`, or logical contexts.
- Explicit coercion uses functions like `Number()`, `String()`, or `Boolean()`.
- Understanding coercion helps avoid bugs and write predictable code.

This manual should serve as a comprehensive guide to understanding and working with JavaScript data types and type coercion.

```<xaiArtifact artifact_id="0f1bf956-7e58-4c2d-b417-7bdcbfa7c407" artifact_version_id="fc84e11f-4fce-4983-b48c-1217673bda8b" title="JavaScript_Data_Types_and_Type_Coercion.md" contentType="text/markdown">

# JavaScript Data Types and Type Coercion Manual

This manual provides a detailed overview of JavaScript data types and type coercion, including examples to demonstrate their usage and behavior.

## 1. JavaScript Data Types

JavaScript has two main categories of data types: **primitive** and **non-primitive (reference)** types.

### 1.1 Primitive Data Types
Primitive data types are immutable and stored directly in memory. There are six primitive types in JavaScript:

#### 1.1.1 Number
Represents both integer and floating-point numbers. It also includes special values like `Infinity`, `-Infinity`, and `NaN`.

```javascript
let integer = 42;
let float = 3.14;
let notANumber = NaN;
let infinity = Infinity;

console.log(typeof integer); // "number"
console.log(typeof float); // "number"
console.log(typeof notANumber); // "number"
console.log(typeof infinity); // "number"
```

#### 1.1.2 String
Represents a sequence of characters enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.

```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}!`;

console.log(typeof singleQuote); // "string"
console.log(typeof templateLiteral); // "string"
```

#### 1.1.3 Boolean
Represents a logical value: `true` or `false`.

```javascript
let isActive = true;
let isCompleted = false;

console.log(typeof isActive); // "boolean"
```

#### 1.1.4 Undefined
Represents a variable that has been declared but not assigned a value.

```javascript
let notAssigned;
console.log(notAssigned); // undefined
console.log(typeof notAssigned); // "undefined"
```

#### 1.1.5 Null
Represents the intentional absence of any object value.

```javascript
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a historical bug in JavaScript)
```

#### 1.1.6 Symbol
Represents a unique and immutable identifier, often used as object property keys.

```javascript
let sym1 = Symbol('id');
let sym2 = Symbol('id');

console.log(sym1 === sym2); // false (Symbols are unique)
console.log(typeof sym1); // "symbol"
```

### 1.2 Non-Primitive (Reference) Data Types
Non-primitive types are mutable and stored as references in memory. The primary non-primitive types are:

#### 1.2.1 Object
Represents a collection of key-value pairs. Objects can include arrays, functions, and other objects.

```javascript
let person = {
  name: 'Alice',
  age: 25
};

console.log(typeof person); // "object"
```

#### 1.2.2 Array
A special type of object used to store ordered lists of values.

```javascript
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object"
console.log(Array.isArray(numbers)); // true
```

#### 1.2.3 Function
A callable object that executes a block of code.

```javascript
function greet() {
  return 'Hello!';
}

console.log(typeof greet); // "function"
```

## 2. Type Coercion

Type coercion is the automatic or explicit conversion of values from one data type to another. JavaScript performs coercion in two ways: **implicit** and **explicit**.

### 2.1 Implicit Type Coercion
Implicit coercion occurs when JavaScript automatically converts types during operations, such as with operators like `+`, `-`, `==`, or `<`.

#### 2.1.1 String Coercion
When a number or boolean is used with the `+` operator alongside a string, JavaScript converts the non-string value to a string.

```javascript
let num = 42;
let str = "The answer is " + num;
console.log(str); // "The answer is 42"
console.log(typeof str); // "string"

let bool = true;
console.log(bool + " is a boolean"); // "true is a boolean"
```

#### 2.1.2 Numeric Coercion
Arithmetic operators (except `+` with strings) trigger conversion to numbers.

```javascript
let strNum = "123";
console.log(strNum - 0); // 123 (string to number)
console.log(typeof (strNum - 0)); // "number"

let bool = true;
console.log(bool * 2); // 2 (true coerces to 1)
```

#### 2.1.3 Boolean Coercion
In logical contexts (e.g., `if` statements, `&&`, `||`), values are coerced to booleans. Falsy values include `0`, `""`, `null`, `undefined`, `NaN`, and `false`. All other values are truthy.

```javascript
let value = 0;
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // Outputs "Falsy"
}

console.log(!!"Hello"); // true (string to boolean)
console.log(!!0); // false
```

#### 2.1.4 Loose Equality (`==`) vs. Strict Equality (`===`)
The `==` operator performs type coercion, while `===` checks both value and type.

```javascript
console.log(42 == "42"); // true (string "42" coerced to number)
console.log(42 === "42"); // false (different types)

console.log(null == undefined); // true (special case in loose equality)
console.log(null === undefined); // false
```

### 2.2 Explicit Type Coercion
Explicit coercion involves manually converting types using functions or operators.

#### 2.2.1 To String
Use `String()`, `.toString()`, or string concatenation.

```javascript
let num = 42;
console.log(String(num)); // "42"
console.log(num.toString()); // "42"
console.log(num + ""); // "42"
```

#### 2.2.2 To Number
Use `Number()`, `parseInt()`, `parseFloat()`, or unary plus (`+`).

```javascript
let str = "123.45";
console.log(Number(str)); // 123.45
console.log(parseInt(str)); // 123
console.log(parseFloat(str)); // 123.45
console.log(+str); // 123.45
```

#### 2.2.3 To Boolean
Use `Boolean()` or double negation (`!!`).

```javascript
let value = "Hello";
console.log(Boolean(value)); // true
console.log(!!value); // true

let zero = 0;
console.log(Boolean(zero)); // false
console.log(!!zero); // false
```

### 2.3 Common Coercion Pitfalls
Type coercion can lead to unexpected results if not handled carefully.

```javascript
console.log("2" + 2); // "22" (string concatenation)
console.log("2" - 2); // 0 (numeric coercion)
console.log([] + {}); // "[object Object]" (array and object to strings)
console.log({} + []); // "[object Object]" (object to string, array to empty string)
```

### 2.4 Best Practices
- Use `===` and `!==` to avoid unexpected coercion.
- Explicitly convert types when clarity is needed.
- Be cautious with operators that trigger coercion (e.g., `+` with strings).
- Test edge cases, especially with `null`, `undefined`, or empty values.

## 3. Practical Examples

### 3.1 Combining Data Types
Mixing data types in operations often triggers coercion.

```javascript
let price = "99.99";
let tax = 0.1;
let total = parseFloat(price) * (1 + tax);
console.log(total); // 109.989
```

### 3.2 Checking Types
Use `typeof`, `instanceof`, or `Array.isArray()` to verify types.

```javascript
let value = [1, 2, 3];
console.log(typeof value); // "object"
console.log(Array.isArray(value)); // true
console.log(value instanceof Array); // true
```

### 3.3 Handling User Input
User inputs are often strings, requiring explicit conversion.

```javascript
let userInput = "42";
let age = parseInt(userInput);
if (isNaN(age)) {
  console.log("Invalid number");
} else {
  console.log("Age:", age); // Age: 42
}
```

## 4. Summary
- JavaScript has six primitive types (`Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`) and non-primitive types (`Object`, `Array`, `Function`).
- Type coercion can be implicit (automatic) or explicit (manual).
- Implicit coercion occurs in operations like `+`, `==`, or logical contexts.
- Explicit coercion uses functions like `Number()`, `String()`, or `Boolean()`.
- Understanding coercion helps avoid bugs and write predictable code.

This manual should serve as a comprehensive guide to understanding and working with JavaScript data types and type coercion.

</xaiArtifact>

# JavaScript Data Types and Type Coercion Manual

This manual provides a detailed overview of JavaScript data types and type coercion, including examples to demonstrate their usage and behavior.

## 1. JavaScript Data Types

JavaScript has two main categories of data types: **primitive** and **non-primitive (reference)** types.

### 1.1 Primitive Data Types
Primitive data types are immutable and stored directly in memory. There are six primitive types in JavaScript:

#### 1.1.1 Number
Represents both integer and floating-point numbers. It also includes special values like `Infinity`, `-Infinity`, and `NaN`.

```javascript
let integer = 42;
let float = 3.14;
let notANumber = NaN;
let infinity = Infinity;

console.log(typeof integer); // "number"
console.log(typeof float); // "number"
console.log(typeof notANumber); // "number"
console.log(typeof infinity); // "number"
```

#### 1.1.2 String
Represents a sequence of characters enclosed in single quotes (`'`), double quotes (`"`), or backticks (`` ` ``) for template literals.

```javascript
let singleQuote = 'Hello';
let doubleQuote = "World";
let templateLiteral = `Hello, ${doubleQuote}!`;

console.log(typeof singleQuote); // "string"
console.log(typeof templateLiteral); // "string"
```

#### 1.1.3 Boolean
Represents a logical value: `true` or `false`.

```javascript
let isActive = true;
let isCompleted = false;

console.log(typeof isActive); // "boolean"
```

#### 1.1.4 Undefined
Represents a variable that has been declared but not assigned a value.

```javascript
let notAssigned;
console.log(notAssigned); // undefined
console.log(typeof notAssigned); // "undefined"
```

#### 1.1.5 Null
Represents the intentional absence of any object value.

```javascript
let emptyValue = null;
console.log(typeof emptyValue); // "object" (this is a historical bug in JavaScript)
```

#### 1.1.6 Symbol
Represents a unique and immutable identifier, often used as object property keys.

```javascript
let sym1 = Symbol('id');
let sym2 = Symbol('id');

console.log(sym1 === sym2); // false (Symbols are unique)
console.log(typeof sym1); // "symbol"
```

### 1.2 Non-Primitive (Reference) Data Types
Non-primitive types are mutable and stored as references in memory. The primary non-primitive types are:

#### 1.2.1 Object
Represents a collection of key-value pairs. Objects can include arrays, functions, and other objects.

```javascript
let person = {
  name: 'Alice',
  age: 25
};

console.log(typeof person); // "object"
```

#### 1.2.2 Array
A special type of object used to store ordered lists of values.

```javascript
let numbers = [1, 2, 3, 4];
console.log(typeof numbers); // "object"
console.log(Array.isArray(numbers)); // true
```

#### 1.2.3 Function
A callable object that executes a block of code.

```javascript
function greet() {
  return 'Hello!';
}

console.log(typeof greet); // "function"
```

## 2. Type Coercion

Type coercion is the automatic or explicit conversion of values from one data type to another. JavaScript performs coercion in two ways: **implicit** and **explicit**.

### 2.1 Implicit Type Coercion
Implicit coercion occurs when JavaScript automatically converts types during operations, such as with operators like `+`, `-`, `==`, or `<`.

#### 2.1.1 String Coercion
When a number or boolean is used with the `+` operator alongside a string, JavaScript converts the non-string value to a string.

```javascript
let num = 42;
let str = "The answer is " + num;
console.log(str); // "The answer is 42"
console.log(typeof str); // "string"

let bool = true;
console.log(bool + " is a boolean"); // "true is a boolean"
```

#### 2.1.2 Numeric Coercion
Arithmetic operators (except `+` with strings) trigger conversion to numbers.

```javascript
let strNum = "123";
console.log(strNum - 0); // 123 (string to number)
console.log(typeof (strNum - 0)); // "number"

let bool = true;
console.log(bool * 2); // 2 (true coerces to 1)
```

#### 2.1.3 Boolean Coercion
In logical contexts (e.g., `if` statements, `&&`, `||`), values are coerced to booleans. Falsy values include `0`, `""`, `null`, `undefined`, `NaN`, and `false`. All other values are truthy.

```javascript
let value = 0;
if (value) {
  console.log("Truthy");
} else {
  console.log("Falsy"); // Outputs "Falsy"
}

console.log(!!"Hello"); // true (string to boolean)
console.log(!!0); // false
```

#### 2.1.4 Loose Equality (`==`) vs. Strict Equality (`===`)
The `==` operator performs type coercion, while `===` checks both value and type.

```javascript
console.log(42 == "42"); // true (string "42" coerced to number)
console.log(42 === "42"); // false (different types)

console.log(null == undefined); // true (special case in loose equality)
console.log(null === undefined); // false
```

### 2.2 Explicit Type Coercion
Explicit coercion involves manually converting types using functions or operators.

#### 2.2.1 To String
Use `String()`, `.toString()`, or string concatenation.

```javascript
let num = 42;
console.log(String(num)); // "42"
console.log(num.toString()); // "42"
console.log(num + ""); // "42"
```

#### 2.2.2 To Number
Use `Number()`, `parseInt()`, `parseFloat()`, or unary plus (`+`).

```javascript
let str = "123.45";
console.log(Number(str)); // 123.45
console.log(parseInt(str)); // 123
console.log(parseFloat(str)); // 123.45
console.log(+str); // 123.45
```

#### 2.2.3 To Boolean
Use `Boolean()` or double negation (`!!`).

```javascript
let value = "Hello";
console.log(Boolean(value)); // true
console.log(!!value); // true

let zero = 0;
console.log(Boolean(zero)); // false
console.log(!!zero); // false
```

### 2.3 Common Coercion Pitfalls
Type coercion can lead to unexpected results if not handled carefully.

```javascript
console.log("2" + 2); // "22" (string concatenation)
console.log("2" - 2); // 0 (numeric coercion)
console.log([] + {}); // "[object Object]" (array and object to strings)
console.log({} + []); // "[object Object]" (object to string, array to empty string)
```

### 2.4 Best Practices
- Use `===` and `!==` to avoid unexpected coercion.
- Explicitly convert types when clarity is needed.
- Be cautious with operators that trigger coercion (e.g., `+` with strings).
- Test edge cases, especially with `null`, `undefined`, or empty values.

## 3. Practical Examples

### 3.1 Combining Data Types
Mixing data types in operations often triggers coercion.

```javascript
let price = "99.99";
let tax = 0.1;
let total = parseFloat(price) * (1 + tax);
console.log(total); // 109.989
```

### 3.2 Checking Types
Use `typeof`, `instanceof`, or `Array.isArray()` to verify types.

```javascript
let value = [1, 2, 3];
console.log(typeof value); // "object"
console.log(Array.isArray(value)); // true
console.log(value instanceof Array); // true
```

### 3.3 Handling User Input
User inputs are often strings, requiring explicit conversion.

```javascript
let userInput = "42";
let age = parseInt(userInput);
if (isNaN(age)) {
  console.log("Invalid number");
} else {
  console.log("Age:", age); // Age: 42
}
```

## 4. Summary
- JavaScript has six primitive types (`Number`, `String`, `Boolean`, `Undefined`, `Null`, `Symbol`) and non-primitive types (`Object`, `Array`, `Function`).
- Type coercion can be implicit (automatic) or explicit (manual).
- Implicit coercion occurs in operations like `+`, `==`, or logical contexts.
- Explicit coercion uses functions like `Number()`, `String()`, or `Boolean()`.
- Understanding coercion helps avoid bugs and write predictable code.

This manual should serve as a comprehensive guide to understanding and working with JavaScript data types and type coercion.

