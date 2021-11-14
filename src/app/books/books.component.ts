import { Component, OnInit } from '@angular/core';

import {BookService} from '../services/book.service'
import { Book } from '../models/book';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  books: Book[] = [];

  bookForm = this.formBuilder.group({
    title: '',
    author: '',
    yearPublished: 0,
    edition : '',
    publisher :'',
    yearPrescribed: 0,
    module : '',
  });

  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder,) {

  }

  ngOnInit() {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe(incwadi =>{
      console.log(incwadi);
      this.books = incwadi;
    })
  }

  onSubmit(): void {
    this.bookService.addBook(this.bookForm.value).subscribe(u =>{
      this.books.push(u);
      
    })
    this.bookForm.reset();
  }

  

  

  
}
