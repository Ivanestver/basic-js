const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }

    if (Number.parseInt(date.toString().slice(11, 15)) !== date.getFullYear()) {
        throw new CustomError().message;
    }

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    if (day < 1 || day > 31 || month < 1 || month > 12) {
        return 'Unable to determine the time of year!';
    }

    switch (month) {
        case 1:
            return 'winter';
            break;
        case 2:
            if (year % 4 === 0 && day < 30 || day < 29) {
                return 'winter';
            }
            else {
                return 'Unable to determine the time of year!';
            }
            break;
        case 3:
            return 'spring';
            break;
        case 4:
            if (day > 30) {
                return 'Unable to determine the time of year!';
            }
            else {
                return 'spring';
            }
            break;
        case 5:
            return 'spring';
            break;
        case 6:
            if (day > 30) {
                return 'Unable to determine the time of year!';
            }
            else {
                return 'summer';
            }
            break;
        case 7:
            return 'summer';
            break;
        case 8:
            return 'summer';
            break;
        case 9:
            if (day > 30) {
                return 'Unable to determine the time of year!';
            }
            else {
                return 'fall';
            }
            break;
        case 10:
            return 'fall';
            break;
        case 11:
            if (day > 30) {
                return 'Unable to determine the time of year!';
            }
            else {
                return 'fall';
            }
            break;
        case 12:
            return 'winter';
            break;
    }
};
