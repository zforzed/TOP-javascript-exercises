const getTheTitles = function(array) {
   let titlesArray=[];
   array.map(item => {
     titlesArray.push(item.title);
   });
   return titlesArray;
};

// Do not edit below this line
module.exports = getTheTitles;
