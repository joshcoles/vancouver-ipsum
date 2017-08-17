import { Component } from '@angular/core';
import { Word } from './word';

class ShowResults {
  show: boolean = true;
}


@Component({
  selector: 'my-app',
  template: `
  <h1>Welcome to {{title}}</h1>
  <p>Select the amount of text you would like and click the "Hit me with that Vancouver Jargon" button below.</p>
  <button (click)="show = !show">HMWTVJ</button>
  <results *ngIf="show"></results>
  `
})


export class AppComponent  {
  title = "Vancouver Ipsum";
}
