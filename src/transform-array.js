module.exports = function transform(arr) {
    if (!Array.isArray(arr))
        throw new Error();
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "--discard-next") {
            i++;           
        }
        else if (arr[i] === "--discard-prev") {
            if (result.length > 0)
                result.pop();
        }
        else if (arr[i] === "--double-next") {
            if (arr.length > i + 1)
                result.push(arr[i + 1]) 
        }
        else if (arr[i] === "--double-prev") {
            if (i > 0)
                result.push(arr[i - 1])              
        }
        else {
            result.push(arr[i])  
        }
    }
    return result;
};
