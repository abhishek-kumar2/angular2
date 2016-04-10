import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
    <h1>{{name}}</h1>
    <button (click)="onClickHandler()">{{button}}</button>
    `
})
export class AppComponent { 
	name : string
	button : string
	
	constructor(){
		this.defaultStatus()
	}

	onClickHandler(){
		if(this.button == "Change me"){
			this.name = "Catch event and changed"
			this.button = "Return"
		}else{
			this.defaultStatus()
		}
		
	}

	defaultStatus(){
		this.name = "My First Angular 2 App"
		this.button = "Change me"
	}

}
