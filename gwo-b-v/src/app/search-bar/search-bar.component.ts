import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../data/book-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  bookData:string; 
  
    constructor(private data: BookDataService) { }
  
    ngOnInit() {
      this.data.currentData.subscribe(bookData => this.bookData = bookData);
    }
  
    newData(text:string) {
      this.data.changeData(text);
    }
  
}
