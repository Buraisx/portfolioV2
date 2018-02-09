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
	columns: any = 2;
	stack = ['rails','react','angular','node','bootstrap','postgres'];
  	constructor(private db: AngularFireDatabase) { }

	ngOnInit() {
		this.projectsObservable = this.getProjects('/projects');
		if (window.innerWidth < 746) {
	      this.columns = 1;
	    }

	    if (window.innerWidth > 746) {
	      this.columns = 2;
	    }
	}
	onResize(event)
	{
		const element = event.target.innerWidth;

	    if (element < 746) {
	      this.columns = 1;
	    }

	    if (element > 746) {
	      this.columns = 2;
	    }
	}

	getProjects(listPath): Observable<any[]>{
		return this.db.list(listPath).valueChanges();
	}


}
