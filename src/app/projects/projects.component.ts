import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectsObservable: Observable<any[]>;
  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.projectsObservable = this.getProjects('/projects');
  }

  getProjects(listPath): Observable<any[]> {
    return this.db.collection(listPath).valueChanges();
  }
}
