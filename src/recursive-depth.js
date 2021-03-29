const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let counter = 0, start = 1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] instanceof Array) counter = this.calculateDepth(arr[i]) + 1;
      if (counter > start) start = counter;
    }
    return start;
  }
};
