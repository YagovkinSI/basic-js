module.exports = function repeater(str, options) {
    var result = "";
    var repeatTimes = typeof options.repeatTimes == "number"
        ? options.repeatTimes
        : 1;
    var additionRepeatTimes = typeof options.additionRepeatTimes == "number"
        ? options.additionRepeatTimes
        : options.additionRepeatTimes == undefined && options.addition == undefined
            ? 0
            : 1;
    var separator = typeof options.separator == "string"
        ? options.separator
        : "+";
    var addition = options.addition == null
        ? "null"
        : options.addition != undefined
            ? options.addition.toString()
            : "";
    var additionSeparator = typeof options.additionSeparator == "string"
        ? options.additionSeparator
        : "|";

    for (var i = 0; i < repeatTimes; i++) {
        result += str;
        for (var j = 0; j < additionRepeatTimes; j++) {
            result += addition;
            if (j != additionRepeatTimes - 1)
                result += additionSeparator;
        }
        if (i != repeatTimes - 1)
            result += separator;
    }
    return result;
};
  