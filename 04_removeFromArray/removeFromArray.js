const removeFromArray = function(arr) {
    for( let j = 1 ; j < arguments.length ; j++ ){
        for( let i = 0 ; i < arr.length ; i++ ){
            if( arr[i] === arguments[j] ){
                arr.splice(i, 1);
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
