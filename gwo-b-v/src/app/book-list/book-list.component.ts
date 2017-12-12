import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../data/book-data.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  bookData:string; 

  constructor(private data: BookDataService) { }

  ngOnInit() {
    this.data.currentData.subscribe(bookData => this.bookData = bookData);
  }

  

}
