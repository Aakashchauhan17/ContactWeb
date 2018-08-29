import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { Kinvey, CacheStore } from 'kinvey-angular2-sdk';
interface Contact {
  _id;
  Name: string;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'ContactWeb';
  public contactList;
  dataStore: CacheStore<Contact>;
  constructor(private zone: NgZone, private router: Router) {
    this.dataStore = Kinvey.DataStore.collection<Contact>('context', Kinvey.DataStoreType.Network);
    // for (let i = 1; i <= 100; i++) {
    //   this.contactList.push(`item ${i}`);
    // }
}
clicked() {
  this.router.navigateByUrl('/filter');
}

  ngOnInit() {
    const subscription = this.dataStore.find()
      .subscribe(data => {
        this.zone.run(() => {
        this.contactList = data; });
      }, (error) => {
        alert(error);
      });
    }
}
