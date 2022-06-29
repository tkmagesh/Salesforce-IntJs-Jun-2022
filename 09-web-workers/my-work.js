
function doWork(){
   for(let i = 0; i < 20000; i++){
        for(let j = 0; j < 10000; j++)
            for(let k =0; k < 100; k++){

            }

        var percentCompleted =  (i / 20000) * 100
        self.postMessage({ type:'progress', percentCompleted : percentCompleted })
        
    }
}

self.addEventListener('message', function(evt){
    if (evt.data === 'start'){
        doWork();
        self.postMessage('completed');
    }
})
