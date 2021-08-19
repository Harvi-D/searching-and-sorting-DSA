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