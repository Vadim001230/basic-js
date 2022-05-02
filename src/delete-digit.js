const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let maxCount = 0;
  let str = String(n);
   for (let i = 0; i < str.length; i++) {
    let newNum = Number(str.substring(0, i) + str.substring(i + 1));
    if (newNum > maxCount){
      maxCount = newNum;
    } 
   }
  return maxCount;
}

module.exports = {
  deleteDigit
};
