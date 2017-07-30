import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})

export class AppComponent implements OnInit {
  title: string = 'app';
  appleStockPrice: string = '0.00';

  constructor(private _router: Router,
    private _appService: AppService) {

    this._router.events.subscribe((ev) => {
      console.log(ev);
    });
  }

  ngOnInit() {
    this._appService.appleStockPriceSubject.subscribe((ev: MessageEvent) => {
      this.appleStockPrice = ev.data;
    })

    this._appService.getTitle()
      .subscribe(i => {
        this.title = i.message;
      });
  }
}
