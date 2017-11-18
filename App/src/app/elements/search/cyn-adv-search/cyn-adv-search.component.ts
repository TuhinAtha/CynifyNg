import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare var $: any;
@Component({
  selector: 'cyn-adv-search',
  templateUrl: './cyn-adv-search.component.html',
  styleUrls: ['./cyn-adv-search.component.scss']
})
export class CynAdvSearchComponent implements OnInit {

  @Input()  filters: any;
  @Input()  data: any;

  objectKeys = Object.keys;


  @Output() onFilter : any = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    var self = this;
    setTimeout(function(){
      console.log(self.data);
    },5000);
  }

  triggerFilter($event){
    this.onFilter.emit($event);
  }

}
