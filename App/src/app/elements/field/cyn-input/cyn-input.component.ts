import { Component, OnInit , Input} from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'cyn-input',
  templateUrl: './cyn-input.component.html',
  styleUrls: ['./cyn-input.component.css']
})
export class CynInputComponent implements OnInit {

  @Input() config : any;
  @Input() form : FormGroup;
  @Input() data : any;
  constructor() { 
  	
  }

  ngOnInit() {
  	
  	this.form.addControl(this.config.name, new FormControl());
  }

}
