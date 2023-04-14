const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(type = true) {
    this.type = type;
  }

  encrypt(str, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let strToUpperCase = str.toUpperCase();
    let keyToUpperCase = key.toUpperCase();

    let nounOfRepeatKey = Math.ceil(strToUpperCase.length / keyToUpperCase.length);
    keyToUpperCase = keyToUpperCase.repeat(nounOfRepeatKey);

    let keyA = 'A'.charCodeAt(0);
    let abcCount = 26;

    let cryptoStr = [];

    for (let i = 0; i < strToUpperCase.length; i++) {
      if (strToUpperCase.charCodeAt(i) < 65 || strToUpperCase.charCodeAt(i) > 90) {
        cryptoStr.push(strToUpperCase[i]);
        let keyToUpperCaseArr = keyToUpperCase.split('');
        keyToUpperCaseArr.splice(i, 0, strToUpperCase[i]);
        keyToUpperCase = keyToUpperCaseArr.join('');
      } else {
        let letterIdx = strToUpperCase.charCodeAt(i) - keyA;
        let shift = keyToUpperCase.charCodeAt(i) - keyA;
        cryptoStr.push(
          String.fromCharCode(keyA + (letterIdx + shift) % abcCount)
        );
      }
    }
    if (this.type === false) {
      cryptoStr.reverse();
      return cryptoStr.join('');
    } else {
      return cryptoStr.join('');
    }
    
  }
  decrypt(str, key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (str === undefined || key === undefined) {
      throw new Error('Incorrect arguments!')
    }

    let strToUpperCase = str.toUpperCase();
    let keyToUpperCase = key.toUpperCase();

    let nounOfRepeatKey = Math.ceil(strToUpperCase.length / keyToUpperCase.length);
    keyToUpperCase = keyToUpperCase.repeat(nounOfRepeatKey);

    let keyA = 'A'.charCodeAt(0);
    let abcCount = 26;

    let DeCryptoStr = [];

    for (let i = 0; i < strToUpperCase.length; i++) {
      if (strToUpperCase.charCodeAt(i) < 65 || strToUpperCase.charCodeAt(i) > 90) {
        DeCryptoStr.push(strToUpperCase[i]);
        let keyToUpperCaseArr = keyToUpperCase.split('');
        keyToUpperCaseArr.splice(i, 0, strToUpperCase[i])
        keyToUpperCase = keyToUpperCaseArr.join('');
      } else {
        let letterIdx = strToUpperCase.charCodeAt(i) - keyA;
        let shift = keyToUpperCase.charCodeAt(i) - keyA;
        DeCryptoStr.push(
          String.fromCharCode(keyA + (letterIdx - shift + abcCount) % abcCount)
        );
      }
    }
    if (this.type === false) {
      DeCryptoStr.reverse();
      return DeCryptoStr.join('');
    } else {
      return DeCryptoStr.join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
