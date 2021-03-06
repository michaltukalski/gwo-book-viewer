import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { BookDataService } from './data/book-data.service';
import { PagerService } from './data/pager.service';




@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [BookDataService, PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
