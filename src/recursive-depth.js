const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (arr === undefined) {
            throw new CustomError();
        }

        if (arr.length === 0) {
            return 1;
        }

        let length = 1;
        let depth = [];

        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                depth.push(this.calculateDepth(arr[i]) + 1);
            }
        }

        length = Math.max.apply(null, depth);

        return length === -Infinity ? 1 : length;
    }
};