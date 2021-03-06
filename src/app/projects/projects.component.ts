import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
	projectsObservable: Observable<any[]>;
  	constructor(private db: AngularFireDatabase) { }

	ngOnInit() {
		this.projectsObservable = this.getProjects('/projects');
	}

	getProjects(listPath): Observable<any[]>{
		return this.db.list(listPath).valueChanges();
	}


}
