const sumAll = function(a, b) {
    let sum = 0;

    if( typeof(a) !== 'number' || typeof(b) !== 'number'){ // I don't think that this is good code practice
        return "ERROR";
    }

    if(a<0 || b<0){ // I don't think that this is good code practice
        return "ERROR";
    }
    
    let start = Math.min(a,b);
    let end = a === start ? b : a;

    for( let i = start ; i <= end ; i++ ){
        sum = sum + i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
