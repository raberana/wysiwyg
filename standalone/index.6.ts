
import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.create(observer => {
  var message = `Executed at ${new Date().getMilliseconds()} ms` ;
  observer.next(message);
  observer.complete();
});

observable.subscribe((val) => console.log(val));
observable.subscribe((val) => console.log(val));

// Executed at 113 ms
// Executed at 115 ms


