const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  readyArr: [],
  getLength() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = this.readyArr;
    let num = arr.length;
    return num;
  },
  addLink(value) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = this.readyArr;
    arr.push(`( ${value} )`);
    this.readyArr = arr;
    return this;
  },
  removeLink(position) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Number.isInteger(position) && (position > 0 && position <= this.readyArr.length)) {
      let arr = this.readyArr;
      arr.splice(position - 1, 1);
      this.readyArr = arr;
      return this;
    } else {
      throw Error('You can\'t remove incorrect link!');
    }
    
  },
  reverseChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = this.readyArr;
    arr.reverse();
    this.readyArr = arr;
    return this;
  },
  finishChain() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = this.readyArr;
    this.readyArr = arr.join('~~');
    return this;
  }
};

module.exports = {
  chainMaker
};
