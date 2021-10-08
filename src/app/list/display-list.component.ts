import { Component, DoCheck, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-display-list',
  templateUrl: './display-list.component.html',
  styleUrls: ['./display-list.component.css']
})
export class DisplayListComponent implements OnInit, DoCheck {

  @Input() itemList: any[];
  @Output() deleteOut = new EventEmitter
  items: string[];
  constructor() { }


  ngDoCheck(){
    if(this.items !== this.itemList){
      this.items = this.itemList.map((item) => {
        item.value = `Employee : ${item.id}  Name:${item.ename} Description: ${item.salary} DOB:${item.dob} Email:${item.email} `;
        return item;
      })
    }
  }
  ngOnInit(): void {
  }
  deleteItem(event){
    this.deleteOut.emit(event);
  }

}
/* Name:${item.ename} Description: ${item.salary} DOB:${item.dob} Email:${item.email} */
