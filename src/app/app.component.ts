import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from 'stream';
import { takeUntil } from 'rxjs/operators';
import { ServiceService } from './service.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  itemList: string[] = [];
  deleteItem(item:any){
    this.itemList = this.itemList.filter((itm:any)=> itm.id !==item.id)
  }
  destroy$: Subject<boolean> = new Subject<boolean>();

  addItemList(item: any){
    
    this.appService.addItems(item);
  }
  constructor(private appService: ServiceService){

  }
  debugger;
  ngOnInit(): void {
    this.appService.items.pipe(takeUntil(this.destroy$)).subscribe((data:any) => {
      this.itemList.push(data);
    });
   
  }
  
}
