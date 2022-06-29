
let radio = (function(){
    let _radios = {};

    function radio(evtName){
        _radios[evtName] = _radios[evtName] || new Radio(evtName);
        return _radios[evtName];
    }

    class Radio{

        #subscribers = [];
        evtName = '';

        constructor(evtName){
            this.evtName = evtName;
        }

        subscribe(subscriptionFn){
            if (typeof subscriptionFn !== 'function')
                throw new Error('subscription should be a function')
            this.#subscribers.push(subscriptionFn);
            return this;
        }

        unsubscribe(subscriptionFn){
            this.#subscribers = this.#subscribers.filter(subscription => subscription !== subscriptionFn)
            return this;
        }

        broadcast(...args){
            this.#subscribers.forEach(subscriptionFn => subscriptionFn(...args))
            return this;
        }

    }

    return radio;
})();



//subscription
let subscription1 = (...args) => {
    console.log('[subscriber-1] message received for topic-1 with data', args)
};

radio('topic-1').subscribe(subscription1);

radio('topic-1').subscribe((...args) => {
    console.log('[subscriber-2] message received for topic-1 with data', args)
});

radio('topic-2').subscribe((...args) => {
    console.log('[subscriber-1] message received for topic-2 with data', args)
});

radio('topic-2').subscribe((...args) => {
    console.log('[subscriber-2] message received for topic-2 with data', args)
});

//publishing a message for a topic
radio('topic-1').broadcast(10,20,30)

//unsubscribe
radio('topic-1').unsubscribe(subscription1)
