import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cyn-header',
  templateUrl: './cyn-header.component.html',
  styleUrls: ['./cyn-header.component.scss']
})
export class CynHeaderComponent implements OnInit {

  @Input() config : any;
  @Output() actionClick : any = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  onHeaderActionClicked(handler){
	this.actionClick.emit(handler);
  }
}
