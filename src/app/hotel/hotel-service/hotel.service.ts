import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  BASE_URL: string= 'local/host';
  Add_Menu_url: string='';
  Add_registration_url:string='';
  Add_registrationdetail_url :string='';
  Add_photo_sing_url :string='';
  Allow_product_url :string='';
  Add_product_url :string='';
  Book_Table_url : string='';
  constructor(
    private http: HttpClient

  ) { }
  Book_Table(endpoint:string,dt :any):Observable<any>{
    return this.http.post(this.Book_Table_url+endpoint,dt).pipe(
      catchError(this.handleError)
    )
  }

  Allow_product(endpoint:string,dt :any):Observable<any>{
    return this.http.post(this.Allow_product_url+endpoint,dt).pipe(
      catchError(this.handleError)
    )
  }

  Add_product(endpoint:string,dt :any):Observable<any>{
    return this.http.post(this.Add_product_url+endpoint,dt).pipe(
      catchError(this.handleError)
    )
  }

  Add_photo_sing(endpoint:string,dt :any):Observable<any>{
    return this.http.post(this.Add_photo_sing_url+endpoint,dt).pipe(
      catchError(this.handleError)
    )
  }


  Add_registration_detail(endpoint:string,dt :any):Observable<any>{
    return this.http.post(this.Add_registrationdetail_url+endpoint,dt).pipe(
      catchError(this.handleError)
    )
  }

  Add_registration(endpoint:string,dt :any):Observable<any>{
    return this.http.post(this.Add_registration_url+endpoint,dt).pipe(
      catchError(this.handleError)
    )
  }
  Addmenu(endpoint:string,dt :any):Observable<any>{
    return this.http.post(this.Add_Menu_url+endpoint,dt).pipe(
      catchError(this.handleError)
    )
  }
  getRequest(endpoint: string): Observable<any>{
    return this.http.get(this.BASE_URL+endpoint).pipe(
      catchError(this.handleError)
    )
  }

  postRequest(endpoint: string, data: any): Observable<any>{
    return this.http.post(this.BASE_URL+endpoint, data).pipe(
      catchError(this.handleError) 
    )
  }
  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  
}
