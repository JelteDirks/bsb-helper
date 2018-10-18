# BSB Helper
Helper functions/classes that are used throughout BSB repositories.

#### new Pipe(initialValue?)
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

#### dateDifference(startDate, endDate, format?) => differenceInDays
Calculate the difference between two dates. The arguments startDate and endDate can either be of type string or Date.
If either startDate or endDate is a string, a format should be provided as a third argument to signal the date format..

```javascript 1.8
let date1 = '18-10-2018';
let date2 = '20-10-2018';

let difference = dateDifference(date1, date2, 'DD-MM-YYYY'); // results in the number 2
```