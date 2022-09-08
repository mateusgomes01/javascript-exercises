const reverseString = function(phrase) {
    let revertedPhrase = "";

    for( let i = phrase.length - 1 ; i >= 0 ; i-- ){
        revertedPhrase = revertedPhrase + phrase[i];
    }

    return revertedPhrase;
};

// Do not edit below this line
module.exports = reverseString;
