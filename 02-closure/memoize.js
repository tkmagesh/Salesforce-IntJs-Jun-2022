function memoize(fn){
    var cache = {};
    return function(no){
        if (typeof cache[no] !== 'undefined')
            return cache[no];
        console.log('processing ', no);
        cache[no] = fn(no);
        return cache[no];
    };
}

var isPrime = memoize(function(no){
    for (var i =2; i <= (no/2); i++ ){
        if (no % i === 0)
            return false;
    }
    return true;
})

var isOddOrEven = memoize(function(no){
    return no % 2 === 0 ? 'even' : 'odd';
})