var add = require('./calculator')

test('Adding 2 numbers', function(){
    var expectedResult = 30
    var actualResult = add(10,20)
    expect(expectedResult).toBe(actualResult)
});