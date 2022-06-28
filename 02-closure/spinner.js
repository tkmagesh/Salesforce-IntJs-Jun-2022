/* Create a spinner object with the following methods (& behavior)

(NO HTML, button, click event etc)

var spinner = // fill in the blanks //

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3
spinner.up() //=> 4

spinner.down() //=> 3
spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1


IMPORTANT:
    There should NOT BE any way by which one can influence the behavior of 'up' and 'down' function

    For ex : (the following SHOULD NOT be possible)

    spinner.count = 10000
    spinner.up() //=> SHOULD NOT return 10001

    OR

    window.count = 10000
    spinner.up() //=> SHOULD NOT return 10001


function fn(){
    console.log('fn invoked')
} */