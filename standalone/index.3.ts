

import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.create(observer => {
  //observer.next('Hello World!');
  observer.complete();
});

observable.subscribe(
    (val) => console.log(val), 
    (val) => console.log(val),
    (val) => console.log('complete'));

// Hello World!


