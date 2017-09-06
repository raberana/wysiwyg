


import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.zip(
    Rx.Observable.interval(5000),
    Rx.Observable.interval(10000),
    Rx.Observable.interval(15000),
    Rx.Observable.interval(20000)
);

var subscription = observable.subscribe(x=> console.log(x));

