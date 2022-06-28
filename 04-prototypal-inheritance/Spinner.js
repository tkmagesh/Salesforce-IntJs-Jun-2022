/* 
    Ensures privacy
    Costly interms of memory
*/
function Spinner(){
    var counter = 0;
    this.up = function(){
        return ++counter;
    }
    this.down = function(){
        return --counter;
    }
}

/* 
    Efficient memory usage
    Lack of privacy
*/
function Spinner(){
    this.__counter__ = 0;
}
Spinner.prototype.up = function(){
    return ++this.__counter__;
}
Spinner.prototype.down = function(){
    return --this.__counter__;
}