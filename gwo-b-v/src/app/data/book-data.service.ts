import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BookDataService {

  private dataSource = new BehaviorSubject<string>("default message");
  currentData = this.dataSource.asObservable();

  constructor() { }

  changeData(newData: string) {
    this.dataSource.next(newData)
  }

}