

import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.of(1, 2, 3);

observable.every(x => x < 4)
    .subscribe((val) => console.log(val));

observable.every(x => x < 3)
    .subscribe((val) => console.log(val));

// true
// false
