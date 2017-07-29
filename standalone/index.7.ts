
import * as Rx from 'rxjs/Rx';

var message = `Executed at ${new Date().getMilliseconds()} ms` ;

var observable = Rx.Observable.create(observer => {
  observer.next(message);
  observer.complete();
});

observable.subscribe((val) => console.log(val));
observable.subscribe((val) => console.log(val));

// Executed at 556 ms
// Executed at 556 ms


