import { Component, OnInit, NgZone , Inject, Injectable } from '@angular/core';
 import {Kinvey, CacheStore} from 'kinvey-angular2-sdk';
import {
    HttpClient, HTTP_INTERCEPTORS, HttpEventType, HttpErrorResponse,
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpClientModule, HttpParams
} from '@angular/common/http';


interface NewContact {
    _id;
    MailingStreet: string;
    MailingCity: string;
    Name: string;
    Phone: string;
    Email: string;
}

@Component({
selector: 'app-filter',
templateUrl: './filter.component.html',
styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
    public newList: Array<any> = [];
     dataStore: CacheStore<NewContact>;
    public LocationAwareList: Array<any> = [];


    constructor(private zone: NgZone, private http: HttpClient) {
        this.dataStore = Kinvey.DataStore.collection<NewContact>('context');

    }

ngOnInit(): void {

    if (Kinvey.User.getActiveUser()) {
    const subscription = this.dataStore.find()
            .subscribe(data => {
                const  abc = data;
                navigator.geolocation.getCurrentPosition((loc) => {
              const myloc = loc ;
              for ( let i = 0, size = abc.length; i < size; i++) {
                  let street = abc[i].MailingStreet;
                  let city = abc[i].MailingCity;
                  street = street.replace(/ +/g, '');
                  city = city.replace(' ', '%2F');

const url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + street + city + '&key=AIzaSyBFrbYpwgOoQUukE139oGYIsrgQn6Al2SE';
  this.http.get(url).subscribe((response: any) => {
              const loc2 = response.results[0].geometry.location;
              if (myloc != null) {

              const distance = this.calculateDistance(myloc.coords.latitude, loc2.lat, myloc.coords.longitude, loc2.lng);
                  if (distance < 100) {
                    console.log('your distance is ->', distance);
                    this.zone.run(() => {
                        this.LocationAwareList.push({title: abc[i].Name, subtitle: abc[i].Email, phone_num: abc[i].Phone });
                    });
                    } else {
                      console.log('Could not complete action of Push');
                    }
                  }
      }, (e) => {
          console.log('Error in GET method');
            });
        }
        });
        this.LocationAwareList = [];

    }, function(e) {
        });
    }
}
  calculateDistance(lat1: number, lat2: number, long1: number, long2: number) {
     const p = 0.017453292519943295;    // Math.PI / 180
     const c = Math.cos;
    const a = 0.5 - c((lat1 - lat2) * p) / 2 + c(lat2 * p) * c((lat1) * p) * (1 - c(((long1 - long2) * p))) / 2;
     const dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
     return dis;
   }
}
