const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `👍 👍 👍 Assertion Passed: ${actual} === ${expected}`;

  } else {
    return `👎 👎 👎 Assertion Failed: ${actual} !== ${expected}`;
  }

};

const tail = function(array) {
  return array.slice(1);
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words));
console.log(assertEqual(words.length, 3));

