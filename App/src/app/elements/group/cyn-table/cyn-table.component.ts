import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {ControlUtil} from 'app/utils/controlutil.service';
import {HttpUtil} from 'app/utils/httputil.service';
import {Util} from 'app/utils/util.service';

declare var $: any;

@Component({
  selector: 'cyn-table',
  templateUrl: './cyn-table.component.html',
  styleUrls: ['./cyn-table.component.scss'],
  providers:[ControlUtil,HttpUtil,Util]
})
export class CynTableComponent implements OnInit {

  @Input()  config: any;
  @Input()  data: any;
  
  controlUtil : ControlUtil;
  httpUtil : HttpUtil;
  util : Util;
  

  q : any = {};
  filters: any = {};
  sortBy : string;
  sortDirection : number;
  totalCount : number;
  page: number = 1;
  pages : number;
  pageSize : number = 10;

  paginator : any =[];

  filterOptions : any = {};

  quickconfig : any = {};
  quickdata : any = {};

  modalState: string;

  constructor(controlUtil : ControlUtil, httpUtil : HttpUtil,util: Util){
    this.controlUtil = controlUtil;
    this.httpUtil = httpUtil;
    this.util = util;
  }
  ngOnInit() {
    let self =this;
    if(self.config.bindPath){
      self.data = this.controlUtil.getDataByPath(self.data,self.config.bindPath);
       
    }
    if(self.config.editable){
      self.quickconfig.fields = self.config.fields.slice();
    }
    if(self.config.filters){
     self.filters = self.getFilters(self.config.filters);
    }
    self.config.q && (self.q = self.config.q);
    self.config.sortBy && (self.sortBy = self.config.sortBy);
    self.config.sortDirection && (self.sortDirection = self.config.sortDirection);
    self.config.pageSize && (self.pageSize = self.config.pageSize); 
    self.fetchData();
  }
  getFilters(filterArr){
    var filterObj ={};
    for(var i in filterArr){
      filterObj[filterArr[i].by]={
        t:filterArr[i].type
      }
      if(filterArr[i].diff){
        filterObj[filterArr[i].by].d = filterArr[i].diff
      }
    }
    return filterObj;
  }
  // createFilterOptions(filterArr){
  //   var self = this;
  //   for(var i in filterArr){
  //     if(filterArr[i].type == 'distinct'){
  //       self.filterOptions[filterArr[i].by] = [];
  //     }
  //   }

  // }
  getFetchUrl(){
    let self = this;
    let query = {};
    self.q && (query['q'] = JSON.stringify(self.q));
    self.filters && (query['filters'] = JSON.stringify(self.filters));

    self.sortBy && (query['sortBy'] = self.sortBy);
    self.sortDirection && (query['sortDirection'] = self.sortDirection);
    self.page && (query['page'] = self.page);
    self.pageSize && (query['pageSize'] = self.pageSize); 

    return self.config.url+'?'+$.param(query);
  }
  fetchData(){
    let self =this;
    let url = self.getFetchUrl();
    self.httpUtil.getRequest(url).then(
        (res: {results:any,totalCount:number,pages:number,filterOptions:any}) => {
          self.data.splice(0,self.data.length);
          for(let i in res.results){
            self.data.push(res.results[i]);
          }
          self.totalCount = res.totalCount;
          self.pages = res.pages;
         
          self.paginator.splice(0,self.paginator.length);
          for(let i=1;i<=5;i++){
            ((self.page - i)>0) && (self.paginator.unshift(self.page - i));
          }
          self.paginator.push(self.page);
          for(let i=1;i<=5;i++){
            ((self.page + i)<=self.pages) && (self.paginator.push(self.page + i));
          }
          console.log(self.paginator);
          self.filterOptions = res.filterOptions;
          debugger;
        },
        (err) => console.log("Task Errored!"),
      );
  }
  onHeaderClick($event){
    let self = this;
    let column = $($event.currentTarget).data('column');
    if(self.sortBy == column){
      self.sortDirection = self.sortDirection * (-1);
    }else{
      self.sortBy = column;
      self.sortDirection = 1;
    }
    $($event.currentTarget).closest('tr').find('i').removeClass('fa-sort-desc').removeClass('fa-sort-asc');
    if(self.sortDirection == 1){
      $($event.currentTarget).find('i').addClass('fa-sort-asc');
    }else{
      $($event.currentTarget).find('i').addClass('fa-sort-desc');
    }
    self.fetchData();
  }
  onPaginate($event){
    let self = this;
    self.page = parseInt($event.currentTarget.innerHTML);
    self.fetchData();
  }
  onPrevPage($event){
    let self = this;
    if(self.page>1){
      self.page = self.page-1;
      self.fetchData();
    }
  }
  onNextPage($event){
    let self = this;
    if(self.page<self.pages){
      self.page = self.page+1;
      self.fetchData();
    }
  }

  onEditClick($event){
    let self = this;
    let item = $($event.currentTarget).data('item');
    self.quickdata = item;
  }

  onQuickModalSave($event){
    debugger;
    let self = this;
    if(self.config.url){
      if(self.quickdata._id){
        //Update
        self.httpUtil.putRequest(self.config.url+'/'+self.quickdata._id,self.quickdata).then(
        (res) => {
          console.log('Saved');
          this.util.toast('success','Saved');
        },
        (err) => {
          console.log('Error');
          this.util.toast('danger','Error');
        });
      }else{
        self.httpUtil.postRequest(self.config.url,self.quickdata).then(
        (res) => {
          console.log('Created');
          this.util.toast('success','Saved');
        },
        (err) => {
          console.log('Error');
          this.util.toast('danger','Error');
        });
      }
    }
    
  }

  triggerFilter($event){
    this.q = this.mapQueryFromFilters();
    this.page = 1;
    this.fetchData();
  }

  mapQueryFromFilters(){
    let q = {};
    for(let key in this.filters){
      if(this.filters[key].t == 'distinct'){
        let qForCurrent = this.filterOptions[key].reduce(function(intialValue,current, index, arr){
          if(current.checked){
            intialValue.push(current.value);
          }
          return intialValue;
        },[]);
        if(qForCurrent.length){
          q[key] = { '$in' : qForCurrent};
        }
      }
      if(this.filters[key].t == 'number-range'){
        debugger;
         q[key] = {
           '$gte' : this.filterOptions[key].minSelected,
           '$lte' : this.filterOptions[key].maxSelected
         };
      }
    }
    return q;
  }
}