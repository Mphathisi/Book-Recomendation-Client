import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book';



@Injectable({
  providedIn: 'root'
})
export class BookService {

  options = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>("http://localhost:9191/prescribedbooks");
  }

  addBook(book: Book): Observable<Book> {
    return this.http.post<Book>("http://localhost:9191/prescribedbook", book, this.options);

  }




}
