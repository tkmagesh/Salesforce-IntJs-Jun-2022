function memoize(fn){
    var cache = {};
    return function(){
        var key = JSON.stringify(arguments);
        if (typeof cache[key] !== 'undefined')
            return cache[key];
        console.log('processing ', arguments);
        cache[key] = fn.apply(this, arguments);
        return cache[key];
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

