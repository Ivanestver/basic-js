const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string' ||
        sampleActivity === undefined ||
        sampleActivity === '' ||
        sampleActivity === ' ' ||
        sampleActivity[0] === ' ' ||
        Number.parseFloat(sampleActivity) >= 9000 ||
        Number.parseFloat(sampleActivity) <= 0 ||
        Number.parseFloat(sampleActivity) > MODERN_ACTIVITY) {
        return false;
    }

    for (let i = 0; i < sampleActivity.length; i++) {
        if (97 <= sampleActivity[i].toLowerCase().charCodeAt(0) && sampleActivity[i].toLowerCase().charCodeAt(0) <= 122) {
            return false;
        }
    }

    return Math.floor(Math.log(sampleActivity / MODERN_ACTIVITY) / 0.693 / HALF_LIFE_PERIOD);
};
