/* 
function add(x,y){
    var x1 = isNaN(x) ? 0 : parseInt(x);
    var y1 = isNaN(y) ? 0 : parseInt(y);
    return x1 + y1;
} 
*/

/* 
function add(x,y){
    function parseArg(n){
        return isNaN(n) ? 0 : parseInt(n);
    }
    return parseArg(x) + parseArg(y);
} 
*/

/* 
function add(x,y){
    function parseArg(n){
        if (typeof n === 'function') return n();
        return isNaN(n) ? 0 : parseInt(n);
    }
    return parseArg(x) + parseArg(y);
} 
*/

/* 
function add(){
    function parseArg(n){
        if (typeof n === 'function') return n();
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += parseArg(arguments[i])
    }
    return result;
} 
*/

/* 
function add(){
    function parseArg(n){
        if (Array.isArray(n)) {
            var result = 0;
            for (var i = 0; i < n.length; i++){
                result += parseArg(n[i]);
            }
            return result;
        }
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += parseArg(arguments[i]);
    }
    return result;
} 
*/

/* 
function add(){
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this, n); // array 'n' is converted as an argument list to the add function
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += parseArg(arguments[i]);
    }
    return result;
} 
*/
/* 
function add(){
    function parseArg(n){
        if (Array.isArray(n)) return add.apply(this, n); // array 'n' is converted as an argument list to the add function
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    return arguments.length <= 1 ? parseArg(arguments[0]) : parseArg(arguments[0]) + add([].slice.call(arguments, 1));
}  
*/

function add(...args){
    function parseArg(n){
        if (Array.isArray(n)) return add(...n);
        if (typeof n === 'function') return parseArg(n());
        return isNaN(n) ? 0 : parseInt(n);
    }
    return args.length <= 1 ? parseArg(args[0]) : parseArg(args[0]) + add(args.slice(1));
}

//commonJS module
module.exports = add;
