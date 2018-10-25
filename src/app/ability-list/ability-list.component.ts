import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ability-list',
  templateUrl: './ability-list.component.html',
  styleUrls: ['./ability-list.component.scss']
})
export class AbilityListComponent implements OnInit {
  abilities = [
                {
                  image: 'edit',
                  title: 'Collaborate',
                  text: `A very friendly person, open to new ideas, as well as approachable.
                        I'll try my best to integrate all your desired features and designs.`
                },
                {
                  image: 'responsive',
                  title: 'Design',
                  text: 'From wireframing to mockups and then to prototypes, I have the design phase pat down.'
                },
                {
                  image: 'browser',
                  title: 'Develop',
                  text: `From back-end logic to front-end design,
                        I enjoy developing every aspect using frameworks like Ruby On Rails and React.`
                }
              ];
  constructor() { }

  ngOnInit() {
  }

}
