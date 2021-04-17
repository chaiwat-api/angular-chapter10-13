import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Tasks Today';
  current_task: string;
  task_items = new Array();

  addTask() {
    if (this.current_task != '') {
      this.task_items.push(this.current_task);
      this.current_task = '';
    }
  }


}
