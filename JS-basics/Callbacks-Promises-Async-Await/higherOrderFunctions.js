// let addFive = (number)=>{
//     console.log("addFive",number+5);
// }
// addFive(5);

// // Store function on a variable and call
// let addFiveHolder = addFive;
// addFiveHolder(10);

const arrayOfNumbers = [1, 2, 3, 4, 5];

// using Reduce
function addNumbersWithReduce(numbers) {
    const sum = arrayOfNumbers.reduce((accumulator,
        currentValue) => {
        return accumulator + currentValue;
    });
    console.log("addNumbersWithReduce", sum);
}


addNumbersWithReduce(arrayOfNumbers);

// using Arguments
function addNumbersWithArgs() {
    const sum = arguments[0].reduce((accumulator,
        currentValue) => {
        return accumulator + currentValue;
    });
    console.log("addNumbersWithArgs", sum);
}

addNumbersWithArgs(arrayOfNumbers);

// using rest
function addNumbersWithRest(...numbers) { // gather the remaining parameters into an array
    let sum = 0;
    numbers.forEach(el => {
        sum = sum += el;
    });

    console.log("addNumbersWithRest", sum);

}
addNumbersWithRest(1);
addNumbersWithRest(1, 2);
addNumbersWithRest(1, 2, 3);


// using spread
function addNumbersWithSpread(...numbers) { // a,b,c,d,e or we can use ...numbers
    let sum = 0;
    numbers.forEach(el => {
        sum = sum += el;
    });

    console.log("addNumbersWithSpread", sum);

}
addNumbersWithSpread(...arrayOfNumbers); // expands