// #To square(root) or not to square(root)

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// The input array will always contain only positive numbers and will never be empty or null.

function squareOrSquareRoot(array) {
    return array.map(elem => Math.sqrt(elem) % 1 ? elem * elem : Math.sqrt(elem))
}

// Explanation
// Math.sqrt(elem) % 1 evaluates to 0 for whole numbers which is a falsy value so you would indeed sqrt the elem
// otherwise if it is a non zero number then the statement is true, which means to square the elem