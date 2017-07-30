import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    appleStockPriceSubject = new Subject<MessageEvent>();

    constructor(private _http: Http) {
        this.initializeThemeColorGenerator();
    }

    getTitle() {
        return this._http.get(`http://localhost:3000/api/title`)
            .map((res: Response) => res.json());
    }

    initializeThemeColorGenerator() {
        var websocket = new WebSocket("ws://localhost:3000/");

        let observable = Rx.Observable.create(
            (obs: Rx.Observer<MessageEvent>) => {
                websocket.onmessage = obs.next.bind(obs);
                websocket.onerror = obs.error.bind(obs);
                websocket.onclose = obs.complete.bind(obs);
                return websocket.close.bind(websocket);
            }
        );

        this.appleStockPriceSubject = Rx.Subject.create(null, observable);
    }
}