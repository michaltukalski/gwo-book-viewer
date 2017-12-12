import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../data/book-data.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  results: Object;
  searchTerm = new Subject<string>();
  
  constructor(private dataService: BookDataService) {
    this.dataService.search(this.searchTerm)
    .subscribe(results => {
      this.results = results;
      this.newData(this.results);
    });
}
    ngOnInit() {
      
    }
  
    newData(obj:Object) {
      if(obj){
        this.dataService.changeData(obj);
      }
    }
  
}
