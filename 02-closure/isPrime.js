
function isPrime(no){
    console.log('processing ', no);
    for (var i = 2; i <= (no/2); i++){
        if (no % i === 0){
            return false;
        }
    }
    return true;
}

isPrime(9) //=> execute the logic to determine the given is prime or not to return false
isPrime(10) //=> execte the logic  to return false
isPrime(11) //=> execute the logic  to return true

isPrime(9) //return false WITHOUT executing the logic again
isPrime(10) //return false WITHOUT executing the logic again
isPrime(11) //return true WITHOUT executing the logic again

isPrime(13) //=> execute the logic to return true
