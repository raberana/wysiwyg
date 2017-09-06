


import * as Rx from 'rxjs/Rx';

//var observable = Rx.Observable.interval(1000);
var observable = Rx.Observable.create(function (observer) {
    observer.next(1);
    observer.next(2);
    observer.next(3);
    observer.complete();
});
//.observeOn(Rx.Scheduler.async);

console.log('just before subscribe');
observable.subscribe({
    next: x => console.log('got value ' + x),
    error: err => console.error('something wrong occurred: ' + err),
    complete: () => console.log('done'),
});
console.log('just after subscribe');

// 1
// 2
// 3
