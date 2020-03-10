class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(message, key) {
        if (message === undefined || key === undefined)
            throw new Error();
        var skip = 0;
        var encryptMessage = [];
        var messageUpper = message.toUpperCase();
        var keyUpper = key.toUpperCase();
        for (var i = 0; i < messageUpper.length; i++) {
            if (messageUpper[i].match(/[a-zA-Z]/) == null) {
                encryptMessage.push(messageUpper[i]);
                skip++;
                continue;
            }
            var messageLetterNumber = messageUpper.charCodeAt(i) - 65;
            var keyLetterNumber = keyUpper.charCodeAt((i - skip) % keyUpper.length) - 65;
            var encryptLetterNumber = (messageLetterNumber + keyLetterNumber) % 26;
            var encryptChar = String.fromCharCode(encryptLetterNumber + 65);
            encryptMessage.push(encryptChar);
        }
        if (!this.direct) encryptMessage.reverse();
        return encryptMessage.join('');
    }

    decrypt(encryptedMessage, key) {
        if (encryptedMessage === undefined || key === undefined)
            throw new Error();
        var skip = 0;
        var decryptMessage = [];
        var encryptedMessageUpper = encryptedMessage.toUpperCase();
        var keyUpper = key.toUpperCase();
        for (var i = 0; i < encryptedMessageUpper.length; i++) {
            if (encryptedMessageUpper[i].match(/[a-zA-Z]/) == null) {
                decryptMessage.push(encryptedMessageUpper[i]);
                skip++;
                continue;
            }
            var encryptedMessageLetterNumber = encryptedMessageUpper.charCodeAt(i) - 65;
            var keyLetterNumber = keyUpper.charCodeAt((i - skip) % keyUpper.length) - 65;
            var decrypttLetterNumber = (encryptedMessageLetterNumber - keyLetterNumber + 26) % 26;
            var decryptChar = String.fromCharCode(decrypttLetterNumber + 65);
            decryptMessage.push(decryptChar);
        }
        if (!this.direct) decryptMessage.reverse();
        return decryptMessage.join('');
    }
}

module.exports = VigenereCipheringMachine;
