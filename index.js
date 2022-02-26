// // Write your solution here!


// //       cats is assigned an initial value of ["Milo", "Otis", "Garfield"]

// const cats = ['Milo', 'Otis', 'Garfield'];

// //     Array functions
// //       destructivelyAppendCat(name)
// //         1) appends a cat to the end of the cats array

// function destructivelyAppendCat(name){
//     return cats.push(name);
// }

// //       destructivelyPrependCat(name)
// //         2) prepends a cat to the beginning of the cats array

// function destructivelyPrependCat(name){
//     return cats.unshift(name);
// }
// //       destructivelyRemoveLastCat()
// //         3) removes the last cat from the cats array

// function destructivelyRemoveLastCat(name){
//     return cats.pop(name);
// }

// //       destructivelyRemoveFirstCat()
// //         4) removes the first cat from the cats array

// function destructivelyRemoveFirstCat(name){
//     return cats.shift(name);
// }

// // appendCat(name)
// // 5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged

// function appendCat(name){
//     return [...cats, name]
// }

// //       prependCat(name)
// // 6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

// function prependCat(name){
//     return [name,...cats]
// }

// //       removeLastCat()
// // 7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

// function removeLastCat(){
//     return cats.slice(0, cats.length - 1);
// }

// //       removeFirstCat()
// //8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged

// function removeFirstCat(){
//     return cats.slice(1);
// }

//===========================================

// Write your solution here!


// assign cats an initial value of ["Milo", "Otis", "Garfield"]

const cats = ["Milo", "Otis", "Garfield"];

// Array functions
// destructivelyAppendCat(name)
//   1) appends a cat to the end of the cats array

function destructivelyAppendCat(name){
    return cats.push(name);
}

//  destructivelyPrependCat(name)
//  2) prepends a cat to the beginning of the cats array

function destructivelyPrependCat(name){
    return cats.unshift(name);
}

// destructivelyRemoveLastCat()
//  3) removes the last cat from the cats array

function destructivelyRemoveLastCat(){
    return cats.pop(-1)
}

// destructivelyRemoveFirstCat()
//  4) removes the first cat from the cats array

function destructivelyRemoveFirstCat(){
    return cats.shift()
}


//appendCat(name)
// 5) appends a cat to the cats array and returns a new array, leaving the cats array unchanged

function appendCat(name){
    return [...cats, name]
}
//prependCat(name)
//6) prepends a cat to the cats array and returns a new array, leaving the cats array unchanged

function prependCat(name){
    return [name, ...cats]
}

//removeLastCat()
//7) removes the last cat in the cats array and returns a new array, leaving the cats array unchanged

function removeLastCat(){
    return cats.slice(0, cats.length - 1)
}

// removeFirstCat()
//8) removes the first cat from the cats array and returns a new array, leaving the cats array unchanged

function removeFirstCat(){
    return cats.slice(1)
}

