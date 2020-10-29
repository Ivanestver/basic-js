const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
    direct = true;
    abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    constructor(_direct) {
        this.direct = _direct;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new CustomError().message;
        }
        let result = '';
        message = message.toLowerCase();
        key = key.toLowerCase();

        let j = 0;

        for (let i = 0; i < message.length; i++) {
            if (this.abc.indexOf(message[i]) !== -1) {
                let keylet = key[j % key.length];
                let keyNum = this.abc.indexOf(keylet);
                if (this.abc.indexOf(message[i]) + keyNum > this.abc.length - 1) {
                    result += this.abc[this.abc.indexOf(message[i]) + keyNum - this.abc.length];
                }
                else {
                    result += this.abc[this.abc.indexOf(message[i]) + keyNum];
                }
                j++;
            }
            else {
                result += message[i];
            }
        }

        return this.direct === undefined ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
    }    

    decrypt(message, key) {
        if (message === undefined || key === undefined) {
            throw new CustomError();
        }
        let result = '';
        message = message.toLowerCase();
        key = key.toLowerCase();

        let j = 0;

        for (let i = 0; i < message.length; i++) {
            if (this.abc.indexOf(message[i]) !== -1) {
                let keylet = key[j % key.length];
                let keyNum = this.abc.indexOf(keylet);
                if (this.abc.indexOf(message[i]) - keyNum < 0) {
                    result += this.abc[this.abc.indexOf(message[i]) - keyNum + this.abc.length];
                }
                else {
                    result += this.abc[this.abc.indexOf(message[i]) - keyNum];
                }
                j++;
            }
            else {
                result += message[i];
            }
        }

        return this.direct === undefined ? result.toUpperCase() : result.toUpperCase().split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
