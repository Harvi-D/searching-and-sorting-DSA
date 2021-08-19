const search = require("./binaryIndexOf");

const elements = [1, 2, 4, 7, 13, 24, 44, 81, 149, 274, 504, 927, 1705, 3136];

function forNumber(target) {
  return (element, index) => {
    console.log("compare", target, "to", element, "at index", index);

    if (element === target) {
      return 0;
    }
    if (element < target) {
      return 1;
    }
    if (element > target) {
      return -1;
    }
  };
}

console.log(search(forNumber(274), elements));

/**As a rule, a linear search will be faster for fewer than 10 elements. 
However, for larger arrays, a binary search will be more efficient.**/

/**The worst-case time complexity of binary search is O(log n), 
where n is the number of elements in the array being searched. 
As with linear search, the worst case for binary search occurs when 
the element doesn't exist in the array.*/

/**The best-case time complexity of binary search is O(1). 
This happens when the matching element is in the middle of the array */

/**The average-case complexity is O(log n) 
and this happens when the matching element is somewhere in the array
but not in the middle. */