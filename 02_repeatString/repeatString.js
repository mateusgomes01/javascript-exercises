const repeatString = function(phrase, n) {
    let i = n;
    let newPhrase = '';

    if(n<0){
        return 'ERROR';
    }

    while( i-->0 ){
        newPhrase = newPhrase + phrase;
    }

    return newPhrase;
};

// Do not edit below this line
module.exports = repeatString;
