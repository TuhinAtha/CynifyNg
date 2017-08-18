import { Component, OnInit, Input } from '@angular/core';
import { FormGroup} from '@angular/forms';
import {ControlUtil} from 'app/utils/controlutil.service'

@Component({
  selector: 'cyn-form',
  templateUrl: './cyn-form.component.html',
  styleUrls: ['./cyn-form.component.css'],
  providers : [ControlUtil]
})
export class CynFormComponent implements OnInit {

  form : FormGroup;

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
  	this.form = new FormGroup({});
  }

}
