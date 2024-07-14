import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = "https://fakestoreapi.com/products";

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<any> {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    );
  }

  getProductById(id: number): Observable<any> {
    const productUrl = `${this.url}/${id}`;
    return this.http.get(productUrl).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    // Handle different error scenarios
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Server error: ${error.status}, ` + `message: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
