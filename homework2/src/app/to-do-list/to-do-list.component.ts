import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})

export class ToDoListComponent implements OnInit {
  @Input() items: [];

  delTask(index: number) {
    this.items.splice(index, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }
}


