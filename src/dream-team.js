const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!Array.isArray(members)) {
    return false
  } else {
  let arr = [];
  for (let friend of members) {
    if (typeof friend === 'string') {
      let item = friend.trim();
      arr.push(item[0].toUpperCase())
    } 
  }
  arr.sort();
  let str = arr.join('')
return str
}}

module.exports = {
  createDreamTeam
};
