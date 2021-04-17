import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab4: Directives';
  parent_array = new Array();
  i: number;

  constructor() {

    for (let i = 1; i < 11; i++) {
      this.parent_array.push(i);
    }

  }

}
