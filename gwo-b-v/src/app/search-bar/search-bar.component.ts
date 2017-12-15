import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../data/book-data.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searchTerm = new Subject<string>();

  constructor(private dataService: BookDataService) {
    this.dataService.search(this.searchTerm)
      .subscribe(results => {
        console.log("FFFFF", this.searchTerm)
        this.newData(results);
      });
  }
  ngOnInit() {

  }

  newData(obj: Object) {
    if (obj) {
      this.dataService.changeData(obj);
    }
  }
}
