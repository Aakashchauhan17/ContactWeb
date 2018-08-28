import { Component, OnInit, NgZone } from '@angular/core';
import {Router} from '@angular/router';
import { Kinvey, CacheStore } from 'kinvey-angular2-sdk';
import { AppModule } from './app.module';

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

    constructor(private router: Router) { }
    logout() {
      Kinvey.User.logout().then(() => {
        this.router.navigate(['login']);
        console.log('Logged Out');

      });
    }
    loginBut() {
      this.router.navigate(['login']);
    }
  ngOnInit(): void {

  }
}

