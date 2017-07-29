


import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.of(1, 2, 3);

observable.reduce((x, y) => x + y)
    .subscribe((val) => console.log(val));

// 6



