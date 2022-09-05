const sumAll = function(start, end) {
   let result;
  let summary=0;
  if ( (start<0 || end<0) || ((typeof start !== "number") || (typeof end !== "number")) ) {
    result="ERROR";
  } 
  else if (start < end) {
    for (let i=start; i<(end+1); i++) {
      summary+=i;
    }
    result = summary;
  } else {
    for (let i=start; i>(end-1); i--) {
      summary+=i;
    }
    result = summary;
  }
  return(result);
};


// Do not edit below this line
module.exports = sumAll;
