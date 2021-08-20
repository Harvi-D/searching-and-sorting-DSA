function factorial(number, total = 1) {
    console.log("Forward phase", number, "*", total);

    //base case stays the same
    if(number <= 1) {
        console.log("base case", number);
        return total;
    }

    total = factorial(number - 1, total * number);
    console.log("Backward phase", number, total);
    return total;
}

console.log(factorial(5));

/**total is used to pass information to the recursive function call. 
The total parameter starts at 1 so that it can be multiplied 
by each number in the subproblems */

/**the function calls itself, passing in 
total * number as the total parameter, 
thus calculating the total in the forward phase*/