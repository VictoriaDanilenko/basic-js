const { NotImplementedError } = require("../extensions/index.js");

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
function countCats(backyard) {
  let counterCats = 0;
  for (let i = 0; i < backyard.length; i++) {
    for (let f = 0; f < backyard[i].length; f++) {
      if (backyard[i][f] === "^^") {
        counterCats++;
      }
    }
  }
  return counterCats;
}

module.exports = {
  countCats,
};
