// Prompt: Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameters: Is it always going to be integers? Are we going to be given any special characters? An empty arr ever?
//Return: Return a new arr with each value doubled
//Examples: If we are given [2,3,4], return [4,6,8]
//   If we are given [4,5,6], return [8,10,12]
//   If we are given [2,22], return [4,44]
//Pseudo: 
//Make a function that takes in an array
//map through the array and multiply each element by 2 and return 



function doubled(x){
    return x.map(n => n * 2);
}
//Test cases:
console.log(doubled([2,3,4]),[4,6,8]);
console.log(doubled([4,5,6]),[8,10,12]);
console.log(doubled([2,22]),[4,44]);