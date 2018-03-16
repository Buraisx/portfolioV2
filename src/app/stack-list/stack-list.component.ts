import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stack-list',
  templateUrl: './stack-list.component.html',
  styleUrls: ['./stack-list.component.scss']
})
export class StackListComponent implements OnInit {
		stack = ['rails','react','angular','node','bootstrap','postgres'];

  constructor() { }

  ngOnInit() {
  }

}
