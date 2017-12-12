import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class BookDataService {

  baseUrl: string = 'https://gwo.pl/booksApi/v1/search?query=';

  private dataSource = new BehaviorSubject<Object>([]);
  currentData = this.dataSource.asObservable();

  constructor(private http:Http) { }

  changeData(newData: Object) {
    console.log("change data in service", newData);
    this.dataSource.next(newData)
  }

  search(terms: Observable<string>) {
    console.log("search called: ", terms)
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        .get(this.baseUrl + term)
        .map(res => res.json());
  }

}