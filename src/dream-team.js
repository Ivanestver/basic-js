const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(member) {
    if (typeof member !== 'object' || member === null) {
        return false;
    }

    let str = [];

    for (let i = 0; i < member.length; i++) {
        if (typeof member[i] === 'string') {
            for (let j = 0; j < member[i].length; j++) {
                if (member[i][j] != ' ') {
                    str.push(member[i][j].toUpperCase());
                    break;
                }
            }
        }
    }

    if (str.length === 0) {
        return false;
    }

    str.sort()

    let res = '';
    for (let i = 0; i < str.length; i++) {
        res += str[i];
    }

    return res === '' ? false : res;
};
