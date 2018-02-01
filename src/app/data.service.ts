import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
	private goals = new BehaviorSubject<any>(['my first life goal', 'i want to make people happy', 'get a girlfriend']);
	goal = this.goals.asObservable();

  	constructor() { }

  	changeGoal(goal){
  		this.goals.next(goal);
  	}
}
