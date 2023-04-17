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
function sortByHeight(arr) {
  let arrWithoutMinusOnes = arr.filter(x => x !== -1);
  arrWithoutMinusOnes.sort((a, b) => a - b);
  let result = Array(arr.length).fill(-1);
  let i = 0, j = 0;
  while (i < arr.length && j < arrWithoutMinusOnes.length) {
    if (arr[i] === -1) {
      i++;
    } else {
      result[i] = arrWithoutMinusOnes[j];
      i++;
      j++;
    }
  }
  return result;
}

module.exports = {
  sortByHeight
};
