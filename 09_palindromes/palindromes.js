const palindromes = function (string) {
   let correctedString = string.replace(/[,!. ]/g,"").toLowerCase();
   let reverseString="";
   for (let i=correctedString.length-1; i>=0; i--) {
     reverseString += correctedString[i];   
   }
   if (correctedString === reverseString) {
     return true;
   } else return false;  
};

// Do not edit below this line
module.exports = palindromes;
