const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],

  getLength() {
    this.arr.length;
    return this
  },

  addLink(value) {
    this.arr.push(value);
    return this
  },

  removeLink(position) {
     if (Number.isInteger(position) === false || position > (this.arr.length - 1) || position <= 0) {
      this.arr = []
      throw new Error("You can't remove incorrect link!")
    }
    this.arr.splice(position - 1, 1)
    return this
  },

  reverseChain() {
    this.arr.reverse();
    return this
  },

  finishChain() {
 let str = this.arr.map(el => `( ${String(el)} )`).join('~~');
    this.arr = [];
    return str
  }
};

module.exports = {
  chainMaker
};
