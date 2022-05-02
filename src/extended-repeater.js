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
function repeater(str, option) {
  let separator = 'separator' in option ? option.separator : '+';
  let repeatTimes = 'repeatTimes' in option ? option.repeatTimes : 1;
  let addition = ('addition' in option ? option.addition : '') ?? 'null';
  let additionSeparator = 'additionSeparator' in option ? option.additionSeparator : '|';
  let additionRepeatTimes = 'additionRepeatTimes' in option ? option.additionRepeatTimes : 1;
  return Array(repeatTimes).fill(str + Array(additionRepeatTimes).fill(`${addition}`).join(additionSeparator)).join(separator);
}

module.exports = {
  repeater
};
