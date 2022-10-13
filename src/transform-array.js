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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
    if (Array.isArray(arr)) {
      if (arr === []) {
        return arr;
      } else {
        let result = [];
        let arrWork = arr.slice();
        for (let i = 0; i < arrWork.length; i++) {
          
          if (typeof arrWork[i] !== 'string') {
            result.push(arrWork[i]);
          } else if (typeof arrWork[i] === 'string') {
            switch (arrWork[i]) {
              case '--discard-next': ((i === (arrWork.length - 1)) ? arrWork.slice(0, (arrWork.length - 1)) : arrWork.splice(i, 2)); result.push('');
                break;
              case '--discard-prev': (i === 0 ? arrWork.slice(1) : result.pop());
                break;
              case '--double-next': ((i === (arrWork.length - 1)) ? arrWork.slice(0, (arrWork.length - 1)) : result.push(arrWork[i + 1]));
                break;
              case '--double-prev': (i === 0 ? arrWork.slice(1) : result.push(arrWork[i - 1]));
                break;
              default: result.push(arrWork[i]);
            }
          }
        }
        return result.filter(item => item !== '');
      }
    } else {
    throw Error('\'arr\' parameter must be an instance of the Array!')
  } 
}

module.exports = {
  transform
};
