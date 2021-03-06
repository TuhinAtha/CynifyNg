import {Component,Input, Output, EventEmitter} from '@angular/core'
import {ControlUtil} from 'app/utils/controlutil.service'

@Component({
	selector: 'cyn-panel',
	templateUrl: './cyn-panel.component.html',
	styleUrls: ['./cyn-panel.component.scss'],
	providers : [ControlUtil]
})
export class CynPanelComponent{

	@Input()  config: any;
	@Input()  data: any;

	controlUtil: ControlUtil;
	constructor(controlUtil : ControlUtil){
		this.controlUtil = controlUtil;
	}
	ngOnInit() {
		if(this.config.bindPath){
			this.data = this.controlUtil.getDataByPath(this.data,this.config.bindPath)
		}
  	}

}