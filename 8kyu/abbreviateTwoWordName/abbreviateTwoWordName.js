// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    let arrName = name.split('')
    let firstInit = arrName[0]
    let secondInit = arrName[arrName.indexOf(' ') + 1]
    return firstInit.toUpperCase() + '.' + secondInit.toUpperCase()
}