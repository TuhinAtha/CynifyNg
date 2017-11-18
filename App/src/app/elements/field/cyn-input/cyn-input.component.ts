import { Component, OnInit, ViewChild, Input} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {ControlUtil} from 'app/utils/controlutil.service';
import * as moment from 'moment';
declare var $ : any;

@Component({
  selector: 'cyn-input',
  templateUrl: './cyn-input.component.html',
  styleUrls: ['./cyn-input.component.scss'],
  providers : [ControlUtil]
})
export class CynInputComponent implements OnInit {

  @Input() config : any;
  @Input() form : FormGroup;
  @Input() data : any;

  type: string;
  controlUtil: ControlUtil;
  @ViewChild('control') control;

  constructor(controlUtil : ControlUtil){
    this.controlUtil = controlUtil;
  }

  ngOnInit() {
    this.type = this.config.type.replace('input-','');
    let formControl = new FormControl('',this.controlUtil.getValidators(this.config.validators));
  	this.form.addControl(this.config.name, formControl);
  }
  ngAfterViewInit() {
    let self =this;
    if(this.type=='date'){
      //debugger;
      if(this.control){
        let options = {
          autoclose : true,
          format : 'M d, yyyy'
        };
        debugger;
        
        $(this.control.nativeElement).closest('.form-group').find('.cyndatepicker').datepicker(options).on("changeDate", function(e) {
          if(e.date){
            self.data[self.config.value] = e.date;
          }
        });
        if( self.data[self.config.value]){
           $(this.control.nativeElement).closest('.form-group').find('.cyndatepicker').datepicker('setDate',moment(self.data[self.config.value]).format("MMM D, YYYY"));
        }
      }
      
    }
  }

}
