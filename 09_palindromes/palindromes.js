const palindromes = function (phrase) {
    phrase = phrase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    phrase = phrase.replace(/\s/g,"");
    for(let i = 0, j=phrase.length-1 ; i<(j/2) ; i++, j-- ){
        if(phrase[i] !== phrase[j]){
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
