import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { Kinvey } from 'kinvey-angular2-sdk';



if (environment.production) {
  enableProdMode();
}
Kinvey.init({
  appKey: 'kid_HkXB1x-XQ',
  appSecret: '311020ed9d26404aaf0e932cad204b03'
});
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('src/sw.js')
    .then(function() {
          console.log('Service Worker Registered');

    }).catch(function(error) {
      console.log('Handle');
    });
}
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
