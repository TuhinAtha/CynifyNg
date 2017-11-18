import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers : [DashboardService]
})
export class DashboardComponent {
  title = 'app';
  config: any;
  data: any;
  constructor(service : DashboardService){
  	this.config = service.getScreenMetadata();
  	this.data = service.getData();
  }
  handleAction(handler){
    this[handler].call();
  }
  onSave(){
     console.log(this.data);
  }
}
