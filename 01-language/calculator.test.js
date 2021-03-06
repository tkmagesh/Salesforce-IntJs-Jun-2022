var add = require('./calculator')

test('Adding 2 numbers', function(){
    var expectedResult = 30
    var actualResult = add(10,20)
    expect(expectedResult).toBe(actualResult)
});

test("Adding numbers in string format", function(){
    var actualResult = add(10,"20")                                                   
    expect(actualResult).toBe(30)
})

test("Adding a non-number string", function(){
    var actualResult = add(10,"abc")                                                  
    expect(actualResult).toBe(10)
})

test("Adding array of numbers", function(){
    var actualResult = add([10,20],[30,40])                                           
    expect(actualResult).toBe(100)
})

test("Adding array with numbers in string format", function(){
    var actualResult = add([10,20],[30,"40"])                                         
    expect(actualResult).toBe(100)
})

test("Adding array of number in string format", function(){
    var actualResult = add([10,20],[30,"abc"])                                        
    expect(actualResult).toBe(60)
})

test("Adding nested array of numbers and strings", function(){
    var actualResult = add([10,20],[30,[40,"abc"]])                                   
    expect(actualResult).toBe(100)
})

test("Adding functions returning numbers", function(){
    var actualResult = add(function(){return 10;}, function(){ return 20;})           
    expect(actualResult).toBe(30)
})

test("Adding functions returning array of numbers", function(){
    var actualResult = add(function(){return [10,20];}, function(){ return [30,40];}) 
    expect(actualResult).toBe(100)
})

test("Adding one number", function(){
    var actualResult = add(10)                                                        
    expect(actualResult).toBe(10)
})

test("Add with no arguments", function(){
    var actualResult = add()                                                          
    expect(actualResult).toBe(0)
})

test("Add varying number of numbers", function(){
    var actualResult = add(10,20,30,40,50)                                                          
    expect(actualResult).toBe(150)
})

test("Adding array of functions returning array of numbers", function(){
    var actualResult = add([function(){return [10,20];}, function(){ return [30,40];}])
    expect(actualResult).toBe(100)
})