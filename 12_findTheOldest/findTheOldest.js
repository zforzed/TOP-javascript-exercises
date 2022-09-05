const findTheOldest = function(array) {
   let ageArray=[];
   let age=0;
   array.map(item => {
     if (!item.yearOfDeath) {
       item.yearOfDeath = new Date().getFullYear();
     }
     age = item.yearOfDeath - item.yearOfBirth;
     ageArray.push(age);
   });
   let prev = 0;
   let max=0;
   for (let i=0; i<ageArray.length; i++) {
     if (ageArray[i] > prev && ageArray[i] > max) {
       max = ageArray[i];
     }
     prev = ageArray[i];
   }
   let result = ageArray.indexOf(max);
   return array[result];
};

// Do not edit below this line
module.exports = findTheOldest;
