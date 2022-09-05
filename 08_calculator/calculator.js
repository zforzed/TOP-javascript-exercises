const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
  let summary = 0;
	arr.map(item => {
    summary += Number(item);
  });
  return summary;
};

const multiply = function(arr) {
  let summary = 1;
  arr.map(item =>{
    summary*=item;
  });
  return summary;
};

const power = function(a,b) {
  let result = a;
	for (let i=1; i<b; i++) {
    result = result*a;
  }
  return result;
};

const factorial = function(a) {
	let result = a;
  for (let i=(a-1); i>0; i--) {
    result *= i;
  }
  if (a === 0) {
    return 1;
  } else return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
