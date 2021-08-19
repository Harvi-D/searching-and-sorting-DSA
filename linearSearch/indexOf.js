function indexOf(isMatch, elements) {
    if (Array.isArray(elements)) {
        for (let index = 0; index < elements.length; index++) {
            if (isMatch(elements[index], index, elements)) {
                return index;
            }
        }
    }
    return -1;
}

module.exports = indexOf;

/**isMatch is a function that takes the current element, 
current index, and original array as parameters. 
It returns true when a matching element is found. */

/**algorithm goes through all of the elements in the array 
and calls isMatch(), passing in the element, index, and array. 
The variable index keeps track of where it is in the array. 
If isMatch() returns true, it will return the current value for index. 
But in cases where isMatch() always returns false, -1 is returned**/