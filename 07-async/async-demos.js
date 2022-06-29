(function(){
    //sync
    function addSync(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        let result = x + y;
        console.log(`   [@service] returning result`);
        return result;
    }

    function addSyncClient(x,y){
        console.log(`[@client] invoking the service`)
        let result = addSync(x,y)
        console.log(`[@client] result = ${result}`);
    }

    window['addSyncClient'] = addSyncClient;

    //async
    function addAsync(x,y, callback){
        console.log(`   [@service] processing ${x} and ${y}`);
        setTimeout(function(){
            let result = x + y;
            console.log(`   [@service] returning result`);
            callback(result);
        }, 5000);
    }

    function addAsyncClient(x,y){
        console.log(`[@client] invoking the service`)
        addAsync(x,y, function(result){
            console.log(`[@client] result = ${result}`);
        });
    }

    window['addAsyncClient'] = addAsyncClient;


     //async
    function addAsyncPromise(x,y){
        console.log(`   [@service] processing ${x} and ${y}`);
        var promise = new Promise(function(resolveFn, rejectFn){
            setTimeout(function(){
                let result = x + y;
                console.log(`   [@service] returning result`);
                resolveFn(result);
            }, 5000);
        });
        return promise;
    }

    //window['addAsyncPromise'] = addAsyncPromise;


    /* 
    console.log(`[@client] invoking the service`)
    var p = addAsyncPromise(100,200)
    p.then(function(result){
        console.log(`[@client] result = ${result}`);
    }) 
    */

    //Promise chaining
    /* 
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(100,200)
        var p2 = p.then(function(result){
            console.log(`[@client] result = ${result}`);
            return new Promise(function(resolveFn, rejectFn){
                setTimeout(function(){
                    var doubleResult = result * 2;
                    resolveFn(doubleResult);
                },5000)
            })
            
        })
        var p3 = p2.then(function(doubleResult){
            console.log(`doubleResult = ${doubleResult}`)
            return 'dummy'
        });
        var p4 = p3.then(function(s){
            console.log(s);
        })

    */

   

    /* 
    function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        var p = addAsyncPromise(x,y)
        p.then(function(result){
            console.log(`[@client] result = ${result}`);
        }); 
    } 
    */

    async function addAsyncPromiseClient(x,y){
        console.log(`[@client] invoking the service`)
        let result = await addAsyncPromise(x,y)
        console.log(`[@client] result = ${result}`);
        return result * 2;
    }

    window['addAsyncPromiseClient'] = addAsyncPromiseClient;

   /*  
   async function batchAddAsyncPromiseClient(){
        let result1 = await addAsyncPromise(10,20);
        console.log(`result1 = ${result1}`);

        let result2 = await addAsyncPromise(100,200);
        console.log(`result2 = ${result2}`);

        let result3 = await addAsyncPromise(1000,2000);
        console.log(`result3 = ${result3}`);
    } 
    */

   /* 
    function batchAddAsyncPromiseClient(){
        return addAsyncPromise(10,20)
            .then(function(result1){
                console.log(`result1 = ${result1}`);
                return addAsyncPromise(100,200)
                    .then(function(result2){
                        console.log(`result2 = ${result2}`);
                        return addAsyncPromise(1000,2000)
                            .then(function(result3){
                                console.log(`result3 = ${result3}`);
                            })
                    })
            })        
    } 
    */

    /* 
    function batchAddAsyncPromiseClient(){
        addAsyncPromise(10,20)
            .then(function(result1){
                console.log(`result1 = ${result1}`)
            })

        addAsyncPromise(100,200)
            .then(function(result2){
                console.log(`result2 = ${result2}`)
            })

        addAsyncPromise(1000,2000)
            .then(function(result3){
                console.log(`result3 = ${result3}`)
            })
        
    }  
    */

    function batchAddAsyncPromiseClient(){
        var p1 = addAsyncPromise(10,20);
        var p2 = addAsyncPromise(100,200);
        var p3 = addAsyncPromise(1000,2000);

        Promise.all([p1, p2, p3])
            .then(function(results){
                console.log(`result1 = ${results[0]}`)
                console.log(`result2 = ${results[1]}`)
                console.log(`result3 = ${results[2]}`)
            })
            
    } 

    window['batchAddAsyncPromiseClient'] = batchAddAsyncPromiseClient;
})();