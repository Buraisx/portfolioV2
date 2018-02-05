import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router'; 
import { DataService } from '../data.service';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  abilities = ['browser','responsive','edit'];
  descriptions = [
      {title:'Web Applications',text: 'With a good understanding of MVC, I can create a fully functioning web application for you with all your desired features.'},
      {title:'Responsive Design', text: 'Optimized visuals and design for all the most common viewports.'},
      {title:'Prototyping', text: 'Using tools like Sketch, Balsamiq, and Photoshop,  I can create appropriate looking mockups and prototypes.'}];
  constructor(private route: ActivatedRoute , private router: Router, private _data: DataService){ 
  }

  ngOnInit() {
    this._data.goal.subscribe(res => this.goals = res);
  }

}
