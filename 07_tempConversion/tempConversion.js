const ftoc = function(temp) {
  let result = ((temp - 32)*0.556).toFixed(1); 
  let i = result.length-1;
  if(result[i] === "0") {
    result = Math.round(Number(result));    
  }
  return Number(result);
};

const ctof = function(temp) {
  let result = ((temp*1.8)+32).toFixed(1);
  let i = result.length-1;
  if(result[i] === "0") {
    result = Math.round(Number(result));    
  }
  return Number(result);
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
