function quickSort(
    compare, 
    elements = [], 
    lowerIndex = 0, 
    upperIndex = elements.length - 1
) {
    //recusive base case
    if (lowerIndex < upperIndex) {
        //calls partition() to update the array so that the first pivot
        // is in the correct location and it returns the index of the pivot
        const index = partition(compare, elements, lowerIndex, upperIndex);
        //recursively calls quickSort() with the indexes above and below 
        //the previous pivot index. 
        //This recursion continues until the base case is reached
        quickSort(compare, elements, lowerIndex, index - 1);
        quickSort(compare, elements, index + 1, upperIndex);
    }
    return elements;
}

function partition(compare, elements, lowerIndex, upperIndex) {
    const pivotValue = elements[upperIndex];
    let partitionIndex = lowerIndex;

    for (let index = lowerIndex; index < upperIndex; index++) {
        const comparison = compare(pivotValue, elements[index]);

        if (comparison > 0) {
            if (partitionIndex !== index) {
                [elements[index], elements[partitionIndex]] = [
                    elements[partitionIndex], 
                    elements[index]
                ];
            }
            partitionIndex++;
        }
    }
    [elements[partitionIndex], elements[upperIndex]] = [
        elements[upperIndex],
        elements[partitionIndex]
    ];
    console.log(partitionIndex);
    return partitionIndex;
}

module.exports = quickSort;



//no new arrays are created;
//only four variables are needed for additional storage;