import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
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
