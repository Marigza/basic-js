const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  readyArr: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.length = this.readyArr.length
    return this;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.readyArr = this.readyArr.concat(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (Number(position) && (position >= 1 && position <= this.readyArr.length)) {
      this.readyArr.splice(position - 1, 1);
      return this;
    } else {
      this.readyArr = [];
      throw new Error('You can\'t remove incorrect link!');
    }
  },
  reverseChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let arr = this.readyArr;
    arr.reverse();
    this.readyArr = arr;
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let result = this.readyArr.join('~~');
    this.readyArr = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
