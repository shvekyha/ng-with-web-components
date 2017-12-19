import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="text-align:center">
    <h1>{{title}}</h1>
    <paper-input [(value)]="myValue"></paper-input>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  myValue = '4';
}
