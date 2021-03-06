
var isPrime = (function(){
    var cache = {};
    return function(no){
        if (typeof cache[no] !== 'undefined')
            return cache[no];
        console.log('processing ', no);
        cache[no] = true;
        for (var i = 2; i <= (no/2); i++){
            if (no % i === 0){
                cache[no] = false;
                break;
            }
        }
        return cache[no];
    };
})();

var isOddOrEven = (function(){
    var cache = {};
    return function(no){
        if (typeof cache[no] !== 'undefined')
            return cache[no];
        console.log('processing ', no);
        cache[no] = no % 2 === 0 ? 'even' : 'odd'
        return cache[no];
    };
})();

isPrime(9) //=> execute the logic to determine the given is prime or not to return false
isPrime(10) //=> execte the logic  to return false
isPrime(11) //=> execute the logic  to return true

isPrime(9) //return false WITHOUT executing the logic again
isPrime(10) //return false WITHOUT executing the logic again
isPrime(11) //return true WITHOUT executing the logic again

isPrime(13) //=> execute the logic to return true


/* 
var obj = {}

obj[0] = 10

typeof obj[10]
'undefined'

typeof obj[0]
'number' 
*/


function isPrime(no){
    isPrime.cache = isPrime.cache || {};
    if (isPrime.cache.hasOwnProperty(no))
        return isPrime.cache[no];
    console.log('processing ', no);
    isPrime.cache[no] = true;
    for (var i = 2; i <= (no/2); i++){
        if (no % i === 0){
            isPrime.cache[no] = false;
            break;
        }
    }
    return isPrime.cache[no];
}

