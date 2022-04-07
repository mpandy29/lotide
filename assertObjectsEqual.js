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

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (let keys of Object.keys(object1)) {
      if (Array.isArray(object1[keys])) {
        return eqArrays(object1[keys], object2[keys]);
      } else {
        if (object1[keys] !== object2[keys]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;

  if (eqObjects(object1, object2)=== true) {
    console.log(`👍 👍 👍 Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  }else {
    console.log (`👎 👎 👎 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' })