import * as Rx from 'rxjs/Rx';

var subject = new Rx.Subject();

subject.subscribe((val) => console.log('observer A: ' + val));

subject.subscribe((val) => console.log('observer B: ' + val));

subject.next(1);
subject.next(2);

// observer A: 1
// observer B: 1
// observer A: 2
// observer B: 2
