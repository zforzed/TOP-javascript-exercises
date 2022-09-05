const removeFromArray = function(array, ...params) {
  let removeArray = Array.from(params);
  let resultArray = [];

  array.map(item => {
    if (!removeArray.includes(item)) {
      resultArray.push(item);
    }
  });
  return resultArray;
};
// Do not edit below this line
module.exports = removeFromArray;
