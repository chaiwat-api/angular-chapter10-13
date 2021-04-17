import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "App - Counting Component Interaction";

  count = 0;
  countNumber() {
    this.count++;
  }

}