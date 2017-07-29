


import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.of(1, 2, 3);

observable.subscribe((val)=> { 
    console.log(val);
})

// 1
// 2
// 3
