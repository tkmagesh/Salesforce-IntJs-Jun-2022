var spinner = new Spinner()

//Spinner?

spinner.up() //=> 1
spinner.up() //=> 2
spinner.up() //=> 3

spinner.down() //=> 2
spinner.down() //=> 1
spinner.down() //=> 0
spinner.down() //=> -1

//IMPORTANT: the return value of the spinner should not be able to be modified from outside