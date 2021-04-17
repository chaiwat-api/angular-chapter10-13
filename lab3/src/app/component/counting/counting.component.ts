import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counting',
  templateUrl: './counting.component.html',
  styleUrls: ['./counting.component.css']
})
export class CountingComponent implements OnInit {

  @Input() countinchild: number;
  constructor() { }

  ngOnInit(): void {
  }

}
