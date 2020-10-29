const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (arr === undefined || arr === null) {
        throw new CustomError();
    }

    let result = [];

    let i = 0;
    while (i < arr.length) {
        switch (arr[i]) {
            case '--discard-next':
                i += 2;
                break;
            case '--discard-prev':
                if (i !== 0 && arr[i - 2] !== '--discard-next') {
                    result.pop();
                }
                i++;
                break;
            case '--double-next':
                if (i !== arr.length - 1) {
                    result.push(arr[i + 1]);
                    result.push(arr[i + 1]);
                }
                i += 2;
                break;
            case '--double-prev':
                if (i !== 0 && result.length !== 0 && arr[i - 2] !== '--discard-next') {
                    if (arr[i - 1] === result[result.length - 1]) {
                        result.push(arr[i - 1]);
                    }
                    else if (isNaN(arr[i - 1]) && isNaN(result[result.length - 1])) {
                        result.push(arr[i - 1]);
                    }
                }
                i++
                break;
            default:
                result.push(arr[i]);
                i++;
        }
    }

    return result;
};
