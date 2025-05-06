'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  return {
    result: 0,

    add: function (x) {
      return this.result + x;
    },

    subtract: function (x) {
      return this.result - x;
    },

    multiply: function (x) {
      return this.result * x;
    },

    divide: function (x) {
      return this.result / x;
    },

    reset: function () {
      this.result = 0;

      return this;
    },

    operate: function (operation, number) {
      this.result = operation.call(this, number);

      return this;
    },
  };
}

module.exports = makeCalculator;
