import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';
import { Product } from './product';
import { ProductDetails } from './productdetails';




@Injectable({
  providedIn: 'root'
})
export class AppService {

  productapiurl = 'api/products';
  productsapiurl = 'api/productdetails';

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');
  httpOptions = {
    headers: this.headers
  };

  constructor(private http: HttpClient) {

  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productapiurl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError)
    );
  }
  getProductDetails(id: number): Observable<ProductDetails> {
    const url = `${this.productsapiurl}/${id}`;
    return this.http.get<ProductDetails>(url).pipe(
      catchError(this.handleError)
    );
  }

}
