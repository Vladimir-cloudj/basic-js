const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  var result = [].concat(...arr)
  // console.log(result);
  result = result.filter(el => el === '^^').length
  // console.log(result);
  return result;
}
// countCats([ [0, 1, '^^'], [0, '^^', 2], ['^^', 1, 2] ])

module.exports = {
  countCats
};
