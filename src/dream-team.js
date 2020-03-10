module.exports = function createDreamTeam(members) {
    var chars = [];
    if (!Array.isArray(members))
        return false;
    for (var i = 0; i < members.length; i++) {
        if (typeof members[i] != "string")
            continue;
        for (var j = 0; j < members[i].length; j++) {
            if (members[i][j] != " ") {
                chars.push(members[i][j].toUpperCase());
                break;
            }
        }        
    }
    return chars.sort().join("");
};