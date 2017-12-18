
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

/*
taken from: https://github.com/platosha/angular-polymer/blob/master/docs/ng-cli-webpack.adoc

In Angular CLI Webpack projects, the main application file is automatically bundled and appended to the end of the body section of the index.html file. 
It means that the Angular application is imported and bootstrapped synchronously. Meanwhile, Polymer elements are loaded from HTML Imports processed asynchronously 
in browsers that do not have a native support.

We have to wait for the Polymer elements to be loaded and registered before running the application code. 
Therefore, we have to postpone the Angular application import until the WebComponentsReady event is dispatched. 

*/


document.addEventListener('WebComponentsReady', () => {
    console.log('WebComponentsReady');
    require('./main.ts');
});

platformBrowserDynamic().bootstrapModule(AppModule);
  