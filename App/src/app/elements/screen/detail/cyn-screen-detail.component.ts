import {Component,Input,Output, EventEmitter} from '@angular/core'

@Component({
	selector: 'cyn-screen-detail',
	templateUrl: './cyn-screen-detail.component.html'
})
export class CynScreenDetailComponent{
	@Input()  config: any;
	@Input() data: any;
	@Output() actionClick : any = new EventEmitter<string>();

	constructor(){
	}
	ngOnInit() {
		
  	}
  	onScreenActionClicked(handler){
		this.actionClick.emit(handler);
	}

}