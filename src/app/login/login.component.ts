import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { Kinvey, CacheStore } from 'kinvey-angular2-sdk';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }
  SFClicked() {

      console.log('else');
     Kinvey.User.loginWithMIC('https://contactpwa.herokuapp.com').then(user => {
      console.log('completed');

     this.router.navigate(['home']);

    }).catch(error => {
      console.log(error);

    });
    }
  ngOnInit() {

  }

}
