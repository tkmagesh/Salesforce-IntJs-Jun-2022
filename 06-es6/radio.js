radio

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
