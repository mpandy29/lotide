const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `👍 👍 👍 Assertion Passed: ${actual} === ${expected}`;

  } else {
    return `👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`;
  }

};

//Implement the function findKeyByValue which
//takes in an object and a value.
//scan the object and return the first key which contains the given value
//If no key with that given value is found, then it should return undefined.

const findKeyByValue = function(objectVariable, value) {
  let chosenObject = Object.keys(objectVariable);
  
  for (let key of chosenObject) {
    
    if (objectVariable[key] === value) {
      return key;
    }
  }
  return undefined;

};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "That '70s Show"));

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);