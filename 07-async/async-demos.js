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

    window['addAsyncPromise'] = addAsyncPromise;


    /* 
    console.log(`[@client] invoking the service`)
    var p = addAsyncPromise(100,200)
    p.then(function(result){
        console.log(`[@client] result = ${result}`);
    }) 
    */


})();