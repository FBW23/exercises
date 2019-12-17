# True or False? 


#### 1. What type? 
* Check whether `3` is equal to `"3"` using loose comparison. Then, check whether they are equal while using strict comparison. 
**Questions: Comment your answers in the js file.** 
* Is there a difference? Why/why not? 
* Which comparison operator should we generally use? Why?
* What would happen if we were to use `=`?

#### 2. Not
* Store the value `true` to a variable. Using a ternary operator,print the `false` option by checking the value of the initial variable.

#### 3. Short Circuit
Given the code below, what will print when when we console log `name`? Comment your answer in the js file.

```javascript
let firstName, givenName;

firstName = 'Stacey';
let name = givenName || firstName || 'John'; 

console.log(name);
```

Strict equality compares two values for equality. Neither value is implicitly converted to some other value before being compared. If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal.

Loose equality compares two values for equality, after converting both values to a common type. After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as === performs it. Loose equality is symmetric: A == B always has identical semantics to B == A for any values of A and B (except for the order of applied conversions).