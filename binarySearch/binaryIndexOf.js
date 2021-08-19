function binaryIndexOf(compare, sortedElements) {
    if (Array.isArray(sortedElements)) {//why not sort at start of function?
        //always starts at zero 
        let lowerIndex = 0;
        //starts at the largest index for the array
        let upperIndex = sortedElements.length - 1;

        while (lowerIndex <= upperIndex) {
            const index = Math.floor((upperIndex + lowerIndex) / 2);

            const comparison = compare(sortedElements[index], index, sortedElements);

            if (comparison > 0) {
                lowerIndex = index + 1;
            }
            if (comparison === 0) {
                return index;
            }
            if (comparison < 0) {
                upperIndex = index - 1;
            }
        }
   }
   return -1;
}

module.exports = binaryIndexOf;

/** If the array is empty, lowerIndex === 0 and upperIndex === -1, 
which means that the while loop never executes. 
If lowerIndex <= upperIndex, then the while loop does execute.**/

/**In the while loop, the first step is to calculate the value of index. 
There may be an odd number of elements, so you will use Math.floor()
to round down to the nearest integer. 
Now, index points to the middle of the array.**/

/**call the compare() function, passing in sortedElements[index], 
index, and sortedElements**/

    //compare() returns 0, the target value is found, so index is returned.
    //compare() returns a value greater than 0, 
        //the target value is greater than the value at index, 
        //so lowerIndex is moved to index + 1
    //compare() returns a value less than 0, 
        //the target value is less than the value at index, 
        //so upperIndex is moved to index - 1

/**process then repeats, moving lowerIndex and upperIndex closer 
and closer together. This continues until compare() returns 0, 
or until lowerIndex is greater than upperIndex and -1 is returned.**/