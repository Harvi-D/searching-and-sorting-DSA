function factorial(number) {
    console.log('Forward phase', number);

    //base case
    if (number <= 1) {
        console.log('base case', number);
        return 1;
    }

    //recursive case
    //function calls itself to calculate factorial(number-1)
    const numberMinusOneFactorial = factorial(number -1);

    console.log('Backwards phase', number, '*', numberMinusOneFactorial);

    return number * numberMinusOneFactorial;
}
console.log(factorial(5));