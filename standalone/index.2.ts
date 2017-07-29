

import * as Rx from 'rxjs/Rx';

var button = document.querySelector('button');

var observable = Rx.Observable.fromEvent(button, 'click');

observable.subscribe((val)=>{
    console.log(val.clientX);
})

// 05
// 22
// 13

