const fibonacci = function(n) {
    if(n<0){
        return "OOPS";
    }

    let curr = 1, prev = 1;
    for( let i = 2 ; i < n ; i++ ){
        let temp = curr;
        curr = curr + prev;
        prev = temp;
    }

    return curr;
};

// Do not edit below this line
module.exports = fibonacci;
