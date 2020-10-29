const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    if (options === undefined) {
        throw new CustomError().message;
    }

    const separator = options.separator === undefined ? '+' : options.separator;
    const additionSeparator = options.additionSeparator === undefined ? '' : options.additionSeparator;

    let result = '';

    if (options.repeatTimes !== undefined) {
        for (let i = 0; i < options.repeatTimes; i++) {
            result += str;
            if (options.additionRepeatTimes !== undefined) {
                for (let j = 0; j < options.additionRepeatTimes; j++) {
                    if (options.addition !== undefined) {
                        result += options.addition;
                    }

                    if (j + 1 != options.additionRepeatTimes) {
                        result += additionSeparator;
                    }
                }
            }

            if (i + 1 != options.repeatTimes) {
                result += separator;
            }
        }
    }
    else {
        result += options.addition !== undefined ? str + options.addition : str;
    }

    return result;
};
  