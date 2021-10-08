import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  items = new BehaviorSubject({id: 1, ename:'Srinath', salary: '30000', dob: '09/22/1994', email: 'srinath@gmail.com' });
  totalItems: any[] = [{id: 1, ename:'Srinath', salary: '30000', dob: '09/22/1994', email: 'srinath@gmail.com'}];
  constructor() { }
  addItems(item: any) {
    const totalItemsLength = this.totalItems.length;
    item.id = totalItemsLength + 1;
    this.totalItems.push(item);
    this.items.next(item);
  }
}
