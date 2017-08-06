import { Component } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { LoginService } from './login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers : [LoginService]
})
export class LoginComponent {
  formGroup : FormGroup;
  service : LoginService;
  screenModel: any;
  dataModel: any = {};
  constructor(ls:LoginService){
  	this.service = ls;
  	this.screenModel = ls.getScreenMetadata();
  }
  ngOnInit() {
    this.formGroup = this.createScreenConfig(this.screenModel);
  }
  createScreenConfig(screenModel){
  	let group : any = {};
  	screenModel.fields.forEach(field => {
  		group[field.name] = new FormControl(field);
  	});

  	return new FormGroup(group);
  }
}