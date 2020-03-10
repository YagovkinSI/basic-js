module.exports = class DepthCalculator {
    calculateDepth(arr) {
        var depth = 0;
        var curDepth = 0;
        for (var i = 0; i < arr.length; i++) {
            if (!Array.isArray(arr[i]))
                continue;
            curDepth = this.calculateDepth(arr[i]);
            if (depth < curDepth)
                depth = curDepth;
        }
        return depth + 1;
    }     
};