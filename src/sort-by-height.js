const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

//arr.splice(index, 0, item); 
//будет вставлять item в arr по указанному индексу (сначала удаляя 0 элементов, то есть просто вставку).
function sortByHeight(arr) {
  let indexArr = [];
  arr.forEach((item, index) => {
    if (item === -1) {
      indexArr.push(index);
    }
  });
  let filterArr = arr.filter(item => item !== -1)
  let sortArr = filterArr.sort((a, b) => a - b);
  indexArr.forEach(item => {
    sortArr.splice(item, 0, arr[item])
  });
  return sortArr;

}

module.exports = {
  sortByHeight
};
