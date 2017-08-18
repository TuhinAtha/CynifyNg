import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cyn-header',
  templateUrl: './cyn-header.component.html',
  styleUrls: ['./cyn-header.component.css']
})
export class CynHeaderComponent implements OnInit {

  @Input() config : any;
  constructor() { }

  ngOnInit() {
  }

}
