const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};

  domains.forEach(domen => {
    const arrElem = domen.split('.');
    for (let i = 0; i < arrElem.length; i++ ) {
      let subStr = `.${arrElem.slice(i).reverse().join('.')}`;
    if (result.hasOwnProperty(subStr)) {
        result[subStr] = result[subStr] + 1
      } else {
        result[subStr] = 1
      }
    }
    });

  return result;
}

module.exports = {
  getDNSStats
};
