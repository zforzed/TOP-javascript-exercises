const fibonacci = function(number) {
   if (number<0) {
      return ("OOPS");
    } else {
    let result = 0;
    let resultArray = [1,1];
    for (let i=2;i<number;i++) {
      result = resultArray[i-2] + resultArray[i-1];
      resultArray.push(result);
    }
    return resultArray[number-1];
  }   
};

// Do not edit below this line
module.exports = fibonacci;
