const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!");
    let newArr = arr;
    let rez = [];
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === undefined) {
            delete newArr[i];
        } else if (newArr[i] === '--discard-next') {
            delete newArr[i + 1];
        } else if (newArr[i] === '--discard-prev') {
            if (newArr[i - 1] !== undefined) {
              rez.pop();
            }
        } else if (newArr[i] === '--double-next') {
            if (newArr[i + 1] !== undefined) {
              rez.push(newArr[i + 1]);
            }
        } else if (newArr[i] === '--double-prev') {
            if (newArr[i - 1] !== undefined) {
              rez.push(arr[i - 1]);
            }
        } else {
          rez.push(newArr[i]);
        }
    }
    return rez;
}

module.exports = {
  transform
};
