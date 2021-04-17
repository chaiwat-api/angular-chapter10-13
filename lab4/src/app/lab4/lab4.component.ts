import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.component.html',
  styleUrls: ['./lab4.component.css']
})
export class Lab4Component implements OnInit {

  @Input() child_array: Array<number>;

  constructor() { }

  ngOnInit(): void {
  }

}
