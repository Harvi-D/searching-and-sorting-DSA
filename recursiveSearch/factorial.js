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


/**the forward phase is breaking down the problem into increasingly
smaller problems until the base case is encountered */

/**the recursive function switches to the backward phase, 
which combines the base case with the previous problem
to ultimately provide a solution for the original problem */

/**This is called a bottom-up recursion because there is no work done 
until the base case is encountered */