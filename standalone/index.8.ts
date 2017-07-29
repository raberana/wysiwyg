
import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.interval(1000);

var subscription = observable.subscribe((val)=> { 
    console.log(val);
});

setTimeout(()=>{
    subscription.unsubscribe();
}, 3000);

// 0
// 1
