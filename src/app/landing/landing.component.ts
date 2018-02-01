import { Component, OnInit } from '@angular/core';
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
//Service
import { DataService } from '../data.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss'],
	animations[
		trigger('goals',[
			// * => * when any change occurs
			transition('* => *',[
				// Query all elements that are being inserted
				// apply that style
				query(':enter', style({opacity: 0}),{optional: true}),
				// stagger timing gap of 300ms
				query(':enter', stagger('300ms',[
					//animate .6s ease in
					//keyframes is a collection of styles, they are set according to offset
					// offset is percentage of animate time
					animate('.6s ease-in', keyframes([
						style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            			style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            			style({opacity: 1, transform: 'translateY(0)',     offset: 1.0}),
						]))
					]),{optional: true}),
				query(':leave', stagger('300ms', [
					animate('.6s ease-in', keyframes([
						style({opacity: 0, transform: 'translateY(0)', offset: 0}),
            			style({opacity: .5, transform: 'translateY(35px)',  offset: 0.3}),
            			style({opacity: 1, transform: 'translateY(-75%)',     offset: 1.0}),
						]))
				]),{optional: true}),
					
			])
		])
	]
})
export class LandingComponent implements OnInit {

	itemCount: number = 4;
	btnText: string = 'Add an Item';
	goalText: string = 'ohno';
	goals = [];
	constructor(private _data: DataService) { }

	// Fires when component is loaded
	ngOnInit() {
		this.itemCount = this.goals.length;
		this._data.goal.subscribe(res => this.goals = res);
		this._data.changeGoal(this.goals);
	}
	removeItem(i){
		this.goals.splice(i,1)
		this._data.changeGoal(this.goals);
	}
	addItem(){
		// on click, push goalText into goals array
		this.goals.push(this.goalText);
		//set local goals text to 0
		this.goalText = '';
		// set itemCount to length of goals array
		this.itemCount = this.goals.length;
		this._data.changeGoal(this.goals);
	}

}
