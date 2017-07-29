

import * as Rx from 'rxjs/Rx';

var timer = Rx.Observable.interval(1000).take(4);

var sequence = Rx.Observable.range(1, 5);

var result = timer.concat(sequence);

result.subscribe(x => console.log(x));

// (1s) 0 (1s) 1 (1s) 2 (1s) 3 1 2 3 4 5
