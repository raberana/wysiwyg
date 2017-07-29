

import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.create(observer => {
  observer.next('Hello World! ' + new Date().getMilliseconds());
  observer.complete();
});

observable.subscribe((val) => console.log(val));
observable.subscribe((val) => console.log(val));

// Hello World! 253
// Hello World! 255


