const caesar = function (string, number) {
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let result = "";
  let gap;
  let factor;
  for (let i = 0; i < string.length; i++) {
    if (abc.includes(string[i].toLowerCase())) {
      gap = abc.indexOf(string[i].toLowerCase()) + number;
      if (gap > abc.length - 1) {
        factor = Math.floor(gap / abc.length);
        gap = gap - abc.length * factor;
      }
      if (gap < 0) {
        factor = Math.floor(gap / abc.length) * -1;
        gap = abc.length * factor + gap;
      }
      if (string[i] === string[i].toUpperCase()) {
        result += abc[gap].toUpperCase();
      } else result += abc[gap];
    } else result += string[i];
  }
  return result;
};

// Do not edit below this line
module.exports = caesar;
