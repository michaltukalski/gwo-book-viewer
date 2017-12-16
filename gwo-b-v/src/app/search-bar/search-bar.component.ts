import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../data/book-data.service';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm = new BehaviorSubject<string>("");
  showNoResultInfo:boolean = false;
  showLoader:boolean = false;
  searchResultsLength:number = 0;

  constructor(private dataService: BookDataService) {
    this.dataService.search(this.searchTerm)
      .subscribe(results => {
        this.searchResultsLength = results.length;
        this.showNoResultInfo = this.searchTerm.value !== "";
        this.showLoader = false;
        this.newData(results);
      });

    this.searchTerm.subscribe({
      next: (value) => this.showLoader = (value !== "")
    })
  }
  ngOnInit() {

  }

  newData(obj: Object) {
    if (obj) {
      this.dataService.changeData(obj);
    }
  }

}
