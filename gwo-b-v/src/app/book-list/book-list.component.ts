import { Component, OnInit } from '@angular/core';
import { BookDataService } from '../data/book-data.service';
import { PagerService } from '../data/pager.service';


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  
  allBooksData:any; 
  pagedData:Object;
  pager: any = {};
  showNoResultInfo: boolean = false;

  constructor(private data: BookDataService, private pagerService: PagerService) { }
  
  ngOnInit() {
    this.data.currentData.subscribe(bookData =>{
        
        this.allBooksData = bookData;
        this.setPage(1);
        
    });
    this.showNoResultInfo = false;
    
  }

  setPage(page: number) {
    this.showNoResultInfo = true;

    if (page < 1 || page > this.pager.totalPages) {
        return;
    }
    this.pager = this.pagerService.getPager(this.allBooksData.length, page);
    this.pagedData = this.allBooksData.slice(this.pager.startIndex, this.pager.endIndex + 1);
    
}

}
