'use strict';

/**
 * Typed array accepts only function as element.
 * @type {FunctionArray}
 */
module.exports = class FunctionArray {

  /**
   * @constructor
   */
  constructor() {
    this._list = [];
  }

  /**
   * Get length of list.
   * @returns {number}
   */
  get length() {
    return this._list.length;
  }

  /**
   * Append function into list.
   * @param {function} fn
   * @returns {FunctionArray}
   */
  use(fn) {
    if (typeof fn === 'function') this._list.push(fn);
    return this;
  }

  /**
   * Apply iteration through each functions.
   * @param {function} callback
   */
  each(callback) {
    return this._list.forEach(callback);
  }

  /**
   * Get all elements in array.
   * @returns {Array}
   */
  toArray() {
    return Array.from(this._list);
  }

  /**
   * Returns new iteration through functions.
   */
  *iterator() {
    let i = 0;
    while (i < this._list.length) yield this._list[i++];
  }

};
