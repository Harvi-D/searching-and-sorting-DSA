//pseudocode
// function sum(n):
//   // Accepts n - find the sum from 1 to n
//   // First, check the base case
//   if n is equal to 1 then:
//     return 1

//   // Otherwise, find the solution to the subproblem
//   // by making a recursive call
//   subproblemSum = sum(n - 1)

//   // Summation
//   return n + subproblemSum;

function sum(n) {
    // Check the base case
    if (n === 1) {
      return 1;
    }
  
    return n + sum(n - 1);
}
console.log(sum(5));