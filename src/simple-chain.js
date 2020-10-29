const CustomError = require("../extensions/custom-error");

const chainMaker = {
    str: {
        value: []
    },

    getLength() {
        return this.str.value.length;
    },

    addLink(value) {
        //value === undefined ? this.str.value.push('') : this.str.value.push(value);
        this.str.value.push(value);
        return this;
    },

    removeLink(position) {
        if (position < 1 || Number.isInteger(position) !== true) {
            this.str.value = [];
            throw new CustomError().message;    
        }
        this.str.value.splice(position - 1, 1);
        return this;
    },

    reverseChain() {
        if (this.str.value.length !== 0) {
            this.str.value = this.str.value.reverse();
        }
        return this;
    },

    finishChain() {
        let result = '';

        for (let i = 0; i < this.str.value.length; i++) {
            result += `( ${this.str.value[i]} )`;
            if (i + 1 !== this.str.value.length) {
                result += '~~';
            }
        }

        this.str.value = [];

        return result;
    }
}; 

module.exports = chainMaker;
