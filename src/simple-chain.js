const chainMaker = {
    array: [],

    getLength() {
        return this.array.length;
    },
    addLink(value) {
        var str = "( " + value + " )";
        this.array.push(str);
        return this;
    },
    removeLink(position) {
        if (typeof position != "number" || position < 1 || position > this.array.length) {
            this.array = [];
            throw new Error()
        }
        this.array.splice(position - 1, 1);
        return this;
    },
    reverseChain() {
        this.array.reverse();
        return this;
    },
    finishChain() {
        var result = this.array.join('~~');
        this.array = [];
        return result;
    }
};

module.exports = chainMaker;
