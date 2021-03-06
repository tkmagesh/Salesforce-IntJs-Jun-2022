var products = [
	{id : 6, name : 'Pen', cost : 50, units : 20, category : 'stationary'},
	{id : 9, name : 'Ten', cost : 70, units : 70, category : 'stationary'},
	{id : 3, name : 'Len', cost : 60, units : 60, category : 'grocery'},
	{id : 5, name : 'Zen', cost : 30, units : 30, category : 'grocery'},
	{id : 1, name : 'Ken', cost : 20, units : 80, category : 'utencil'},
    {id : 7, name : 'Mouse', cost : 100, units : 20, category : 'electronics'}
];

/* 
sort
filter
group
max
min
*/

function describe(title, fn){
    console.group(title);
    fn()
    console.groupEnd();
}

function describeGroup(obj){
    for (var key in obj){
        describe('Key [' + key + ']', function(){
            console.table(obj[key]);
        });
    }
}

describe('Initial List', function(){
    console.table(products)
});

describe('Sorting', function(){
    describe('Default sort (by id)', function(){
        function sortProductsById(){
            for (var i=0;i < products.length-1; i++)
                for(var j = i+1; j<products.length; j++)
                    if (products[i].id > products[j].id){
                        var temp = products[i];
                        products[i] = products[j];
                        products[j] = temp
                    }
        }
        sortProductsById()
        console.table(products)
    })

    function sort(list, comparer){
        var comparerFn = null;
        
        if (typeof comparer === 'function')
            comparerFn = comparer;

        if (typeof comparer === 'string')
            comparerFn = function(item1, item2){
                if (item1[comparer] < item2[comparer]) return -1
                if (item1[comparer] > item2[comparer]) return 1
                return 0;
            }
        
        if (!comparerFn) return
        
        for (var i=0;i < list.length-1; i++){
            for(var j = i+1; j<list.length; j++)
                if (comparerFn(list[i], list[j]) > 0 ){
                    var temp = list[i];
                    list[i] = list[j];
                    list[j] = temp
                }
        }
    }
    describe('Any list by any attribute', function(){
       /*  function sort(list, attrName){
            for (var i=0;i < list.length-1; i++)
                for(var j = i+1; j<list.length; j++)
                    if (list[i][attrName] > list[j][attrName]){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp
                    }
        } */
        describe('Sort products by name', function(){
            sort(products, 'name')
            console.table(products)
        })

        describe('Sort products by cost', function(){
            sort(products, 'cost')
            console.table(products)
        })

    });

    describe('Any list by any comparer', function(){
       /*  function sort(list, comparerFn){
            for (var i=0;i < list.length-1; i++)
                for(var j = i+1; j<list.length; j++)
                    if (comparerFn(list[i], list[j]) > 0 ){
                        var temp = list[i];
                        list[i] = list[j];
                        list[j] = temp
                    }
        } */
        var compareProductsByValue = function(p1, p2){
            var p1Value = p1.cost * p1.units,
                p2Value = p2.cost * p2.units;
            if (p1Value < p2Value) return -1
            if (p1Value > p2Value) return 1
            return 0;
        };

        /* 
        var compareProductsByValueDesc = function(p1, p2){
            return compareProductsByValue(p1, p2) * -1;
        }; 
        */

        function getDescComparer(comparer){
            return function(){
                return comparer.apply(this, arguments) * -1;
            }
        }

        describe('Sort products by value [cost * units]', function(){
            sort(products, compareProductsByValue);
            console.table(products);
        })

        describe('Sort products by value [cost * units] [descending]', function(){
            var compareProductsByValueDesc = getDescComparer(compareProductsByValue)
            sort(products, compareProductsByValueDesc);
            console.table(products);
        })
    })
});

describe('Filtering', function(){
    describe('Filter stationary products', function(){
        function filterStationaryProducts(){
            var stationaryProducts = [];
            for (var i =0; i < products.length; i++){
                var product = products[i];
                if (product.category === 'stationary')
                    stationaryProducts.push(product)
            }
            return stationaryProducts;
        }
        var stationaryProducts = filterStationaryProducts();
        console.table(stationaryProducts)
    });

    describe('Filter any list by any criteria', function(){
        function filter(list, predicate){
            var result = [];
            for (var i =0; i < list.length; i++){
                var item = list[i];
                if (predicate(item))
                    result.push(item)
            }
            return result;
        }

        function negate(predicate){
            return function(){
                return !predicate.apply(this, arguments) 
            };
        }

        function or(predicate1, predicate2){
            return function(){
                return predicate1.apply(this, arguments) || predicate2.apply(this, arguments) 
            }
        }

        function and(predicate1, predicate2){
            return function(){
                return predicate1.apply(this, arguments) && predicate2.apply(this, arguments) 
            }
        }

        describe("Products by cost", function(){
            //ES5
            /* 
            var costlyProductPredicate = function(product){
                return product.cost > 60;
            };

            var stationaryProductPredicate = function(product){
                return product.category === 'stationary'
            }; 
            */

            //ES6

            var costlyProductPredicate = product => product.cost > 60;
            

            var stationaryProductPredicate = product => product.category === 'stationary';

            var costlyStationaryProductPredicate = and(costlyProductPredicate, stationaryProductPredicate)

            describe('costly products [cost > 60]', () => {
                var costlyProducts = filter(products, costlyProductPredicate)
                console.table(costlyProducts)
            })

            /* 
            var affordableProductPredicate = function(product){
                return product.cost <= 50;
            }; 
            */

            var affordableProductPredicate = negate(costlyProductPredicate);

            describe('affordable products', function(){
                var affordableProducts = filter(products, affordableProductPredicate)
                console.table(affordableProducts);
            })

            describe('costly stationary products', function(){
                var costlyStationaryProducts = filter(costlyStationaryProductPredicate);
                console.table(costlyStationaryProducts);
            })
        });

        describe('Products by units', function(){
            describe('understocked products [units < 60]', function(){
                /*  */
            })
            describe('well stocked products', function(){
                /*  */
            })
        })
    })
})

describe('Grouping', function(){
    function group(list, keySelector){
        var result = {};
        for (var i =0; i < list.length; i++){
            var item = list[i],
                key = keySelector(item);
            if (typeof result[key] === 'undefined')
                result[key] = [];
            result[key].push(item);
        }
        return result;
    }

    describe("Products by category", function(){
        var categoryKeySelector = function(product){
            return product.category;
        };

        var productsByCategory = group(products, categoryKeySelector);
        describeGroup(productsByCategory);
    });
});