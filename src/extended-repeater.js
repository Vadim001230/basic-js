const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = 'separator' in options ? options.separator : '+';
  let repeatTimes = 'repeatTimes' in options ? options.repeatTimes : 1;
  let addition = ('addition' in options ? options.addition : '') ?? 'null';
  let additionSeparator = 'additionSeparator' in options ? options.additionSeparator : '|';
  let additionRepeatTimes = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 1;
  return Array(repeatTimes).fill(str + Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator)).join(separator);
}

module.exports = {
  repeater
};
