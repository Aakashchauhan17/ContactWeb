import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';

import { Kinvey, CacheStore } from 'kinvey-angular2-sdk';
import { AppModule } from './app.module';
import * as myGlobals from './gloabal';


Kinvey.init({
  appKey: 'kid_HkXB1x-XQ',
  appSecret: '311020ed9d26404aaf0e932cad204b03'
});
interface Contact {
  _id;
  Name: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'ContactWeb';
    public contactList: Array<any> = [];
    dataStore: CacheStore<Contact>;
    constructor(private zone: NgZone, private router: Router) {
    this.dataStore = Kinvey.DataStore.collection<Contact>('context');
    }
    clicked() {
      this.router.navigateByUrl('/filter');
      navigator.geolocation.getCurrentPosition((loc) => {
      myGlobals.UrlComponent.urlArray = loc.coords; });
    }
  ngOnInit(): void {
    if (Kinvey.User.getActiveUser()) {
      const subscription = this.dataStore.find()
      .subscribe(data => {
        this.zone.run(() => {
        this.contactList = data; });
      }, (error) => {
        alert(error);
      }, () => {
        // ...
      }); } else {
      Kinvey.User.login('admin', 'admin').then(() => { const subscription = this.dataStore.find()
        .subscribe(data => {
          this.zone.run(() => {
          this.contactList = data; });
        }, (error) => {
          alert(error);
        }, () => {
          // ...
        });
      } );

    }
  }
}

