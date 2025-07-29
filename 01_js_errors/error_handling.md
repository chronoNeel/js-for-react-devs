## Javscript Error Handling

This documentation is for error handling in Javascript. When executing Javascript code, differnt errors can occur. Errors can be coding errors made by the programmer, errors due to wrong input, and other unforseeable things. Proper error handling ensures that applications can recover gracefully or provide meaningful feedback to users. 

##  Types of Erros

When an error occurs, Javascript will normally stop and generate and error message. The technical term for this is: Javascript will throw an exception (throw an error). <br>
Javascript has built-in error types, each representing a specific kind of issue:

| Error Name         | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `SyntaxError`      | Thrown when code has incorrect syntax.                                     |
| `ReferenceError`   | Thrown when referencing a variable that is not declared.                   |
| `TypeError`        | Thrown when a value is used in an inappropriate way.                       |
| `RangeError`       | Thrown when a value is not in the set or range of allowed values.          |
| `URIError`         | Thrown when `encodeURI()` or `decodeURI()` is used incorrectly.            |
| `EvalError`        | Thrown when `eval()` is used incorrectly (Deprecated).                     |
| `AggregateError`   | Thrown when multiple errors need to be reported together.                  |


## Throw, and Try...Catch...Finally

The `try` statement defines a code block to run (to try). <br>
The `catch` statement defines a code block to handle any error. <br>
The `throws` statement defnes a custom error. <br>. 
The `finally` statement defines a code block to run regardless of the execution. <br>

## Javascript try and catch

In javascript try and catch come in pair:

**Syntax**
```javascript
try {
    // block of code to try
} catch (err) {
    // block of code to handle error
}
```

## throw Statement
The `throw` statement allows to create custom errors or rethrow existing ones.<br>
**Example**
```javascript
function divide (a, b) {
    if (b == 0) {
        throw new Error ("Division by zero is not possible.")
    } 
    return a / b;
}

try {
    console.log (divide (4, 0))
} catch (error) {
    console.error (error.message)
}

// Output: Division by zero is not possible.
```


## finally block 
The `finally` block runs a code block, after try and catch, regardless of the result:<br>

**Syntax**
```javascript
try {
    // blcok of code to try
} catch (err) {
    // block of code to handle errors
} finally {
    // block of code to execute regardless of the result
}
```
**Example**
```javascript
function processData (data) {
    let resources = null;
    try {
        resources = getResources ();
        let jsonData = JSON.parse (data);
        console.log (`The resource is ${resources.id}`);
    } catch (error) {
        console.log ("Processing Error: " + error.name);
    } finally {
        if (resources) {
            console.log ("Cleaning up resources....");
            releaseData (resources);
        }
    }
}

function getResources () {
    return { id : 55};
}

function releaseData (r) {
    console.log (`${r.id} has been released.`);

}

processData (' {"invalid : "demo"} ');
```

## Error Objects

Javascript has built in error object that provides error information when an error occurs. The error object provide two useful properties: **name** and **message**.
**Error Object Properties**

| Property          | Description                               |
|-------------------|-------------------------------------------|
| Name              | Sets or returns an error name             |
| Message           | Sets or returns an error message (a string)|


**Example**
```javascript
try {
  throw new Error('Something went wrong');
} catch (error) {
  console.log('Name:', error.name); // Name: Error
  console.log('Message:', error.message); // Message: Something went wrong
  console.log('Stack:', error.stack); // Stack: (stack trace)
}
```

**1. Syntax Error:**
Mistakes in code structure. 
```javascript
if (true { // missing closing parenthesis
    console.log ("error");
}
```

**2. Reference Error:** 
Access*ing varibles that don't exist.
```javascript 
console.log (myVar); // myVar is not declared
```

**3. Type Error:**
```javascript 
null.f(); //can't call functions on null
```

**4. Range Error:** Value out of allowed range.
```javascript 
new Array (-1); // arrray size can't be nagative

let num = 1;
console.log (num.toPrecision (500)); // A number can't have 500 significant digits
```

**5. Eval Error:**
An eval error indicates an error in eval() function. Newer versions of javascript do not throw EvalError. 

**6. URI Error:**
A URI (Uniform Resource Identifier) is like a URL. It can't contain certain characters so we need to encode them. For example:
```javascript
encodeURI("hello world")  // → "hello%20world"
```
```javascript
decodeURI('%'); //  URIError: URI malformed
```
**7. Logical Error:**
Code runs but gives wrong results.
```javascript 
if (a = 5) {...}; // assignment operator instead of comparison
```

## Async Error Handling