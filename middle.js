const eqArrays = function(array1, array2) {
  // check if both are equal length
  //check is each element is the same
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
};


const assertArraysEqual = function(array1, array2) {
// create function that will take in two arrays and console.log an appropriate message to the console
  if( eqArrays(array1, array2) === true) {
    console.log (`👍 👍 👍 Assertion Passed: ${array1} === ${array2}`);
  } else {
    console.log (`👎 👎 👎 Assertion Failed: ${array1} !== ${array2}`);
  }

};

const middle = function (array) {
//take in an array
//return the middle-most element(s) of the array
//if array has only two elements --> return empty array
//if array has ODD number of element--> return a single middle element 
//if array has even number of elements --> return two elemets in the middle 

// need .length -1
// loop in the array  
// if statements
// push element into new array 

let midArray = [];
let midIndex = array[Math.floor((array.length - 1) / 2)];

 if (array.length === 2) {
    return midArray;
   
  } if (array.length % 2 !== 0) {
      midArray.push(midIndex)
      return midArray;
  
  } else {
    midArray.push(array[midIndex - 1] )
    midArray.push(array[midIndex])
    return midArray;

  }

};

//console.log(middle([1, 2])) 
//console.log(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, ]));
//console.log(middle([1, 2, 3, 4, 5, 6]));

//test
//assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4] );