import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  
  constructor() { }
  @Input() item:any;
  @Output() deleteOut = new EventEmitter;
  ngOnInit(): void {
  }
  deletedItem(item:any){
    this.deleteOut.emit(item);
  }

}
