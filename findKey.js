const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    console.log  `👍 👍 👍 Assertion Passed: ${actual} === ${expected}`;

  } else {
    console.log `👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`;
  }

};

const findKey = function(object, callback) {
  // scan the object
  //return the first key for which the callback returns a truthy value.
  //If no key is found, then it should return undefined.
  for (const key in object) {
  
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};


// const test = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2); // => "noma"

// console.log(test);

// const test2 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 3); // => "Akaleri"

// console.log(test2);

// const test3 = findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 1); // => "Blue Hill"

// console.log(test3);


// assertEqual(test2, "Akaleri");
// assertEqual(test3, "Blue Hill");