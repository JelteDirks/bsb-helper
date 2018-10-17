# BSB Helper
Helper functions/classes that are used throughout BSB repositories.

####Pipe
Chain functions that mutate a single value by adding them to a pipe object.
```javascript 1.8
function addTwo(value) {
    return value + 2;
}

let pipe = new Pipe(3); // initialize a new pipe with a value
pipe.setValue(1); // or set value manually by calling setValue().

pipe.add(addTwo); // <-- CORRECT: add a function to the pipe. (WITHOUT PARENTHESES).
pipe.add(addTwo()); // <-- WRONG: function should be passed as argument, not called.

pipe.run(); // run all functions in the order that they are added.

let newValue = pipe.getValue(); // retrieve the value.
```
