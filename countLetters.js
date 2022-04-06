const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `👍 👍 👍 Assertion Passed: ${actual} === ${expected}`;

  } else {
    return `👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`;
  }

};

const countLetters = function (sentence) {
  const results = {};
  
  for (let letters of sentence) {
   
    if (results[letters]) {
      results[letters] += 1;
   
    } else {
      results[letters] = 1;
    }

  }
  delete results[" "];
  return results;
};

console.log(countLetters("lighthouse in the house"));
