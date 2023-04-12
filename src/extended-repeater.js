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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let result = '';
  let separator = options.separator || '+';
  let additionSeparator = options.additionSeparator || '|';
  if (options.addition === undefined) {
    options.addition = '';
  }
  
  result = (String(str) + (String(options.addition) + additionSeparator).repeat(options.additionRepeatTimes - 1) + String(options.addition) + separator).repeat(options.repeatTimes - 1) + (String(str) + (String(options.addition) + additionSeparator).repeat(options.additionRepeatTimes - 1) + String(options.addition));
  
  return result
}

module.exports = {
  repeater
};
