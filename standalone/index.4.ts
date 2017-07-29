import * as Rx from 'rxjs/Rx';

var observable = Rx.Observable.create(observer => {
  observer.next('Hello World!');
  observer.complete();
});

var observer = {
    next: (val) => { console.log('Next: ' + val); },
    error: (val) => { console.log('Error: ' + val); },
    complete: () => { console.log('Complete'); }
};

observable.subscribe(observer);

// Next: Hello World!
// Complete

