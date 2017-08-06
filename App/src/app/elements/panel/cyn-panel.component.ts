import {Component,Input} from '@angular/core'

@Component({
	selector: 'cyn-panel',
	templateUrl: './cyn-panel.component.html'
})
export class CynPanelComponent{

	@Input()  config: any;
	constructor(){
		debugger;
	}

}