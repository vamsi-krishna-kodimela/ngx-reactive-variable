# NGX Reactive Variable
## Description
This package is implementation of the [Reactive Variable Concept](https://medium.com/angular-simplified/reactive-variable-architecture-in-angular-7ced5fb0dcbb)  for Angular 17 or more.


## Installation
Available via npm as [@ngx-reactive-variable](https://www.npmjs.com/package/ngx-reactive-variable)
```
npm i ngx-reactive-varaible
```
## How to use
Import ReactiveVariable
```
import {ReactiveVariable, REACTIVE_VARIABLE_TYPE } from "ngx-reactive-variable";
```
Initializing a variable.
```
const selection = ReactiveVariable<string>("Apple",REACTIVE_VARIABLE_TYPE.BEHAVIORAL);
```
Usage of value at the instance

```
// Get value at the instance
console.log(selection.value)
```
Listening to the value change
```
// For SUBJECT or BEHAVIORAL type
selection.value$.subscribe({
    next:(value)=>{
        console.log(value);
    }
});

// For SIGNAL type
selection.value$(); // It emits the signal value which we can directly use in template
```
Setting a value
```
selection.value="Hello World!";
```