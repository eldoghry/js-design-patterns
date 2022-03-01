//not var is function scope and let is block scope
function counter() {
  let arr = [];

  // x here is var, and it also clousre variable
  for (var x = 0; x < 9; x++) {
    arr[x] = function () {
      return x;
    }; //refrenece of x not value becouse it is in function not assigned directly
  }

  return arr;
}

const callInnerFunctions = counter();

console.log(callInnerFunctions[0]()); //9
console.log(callInnerFunctions[4]()); //9
console.log(callInnerFunctions[8]()); //9
console.log(callInnerFunctions[0]()); //9

//not var is function scope and let is block scope
function counter() {
  let arr = [];

  // x here is var, and it also clousre variable
  for (var x = 0; x < 9; x++) {
    arr[x] = function () {
      return x;
    }; //refrenece of x not value becouse it is in function not assigned directly
  }

  return arr;
}

const callInnerFunctions = counter();

console.log(callInnerFunctions[0]()); //9
console.log(callInnerFunctions[4]()); //9
console.log(callInnerFunctions[8]()); //9
console.log(callInnerFunctions[0]()); //9
