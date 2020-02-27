import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import {environment} from '../environments/environment'
import { catchError, retry, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class HunterService {

  constructor(private http: HttpClient) { }

  uri = environment.BACKEND_URL;


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  getData(day_after: string, day_before: string) {

    let url = `${this.uri}`;
   
    console.log("Service Get begins now", day_after, day_before);

    const options = {day_after, day_before} ?
    { params: new HttpParams()
      .set('day_after', day_after)
      .set('day_before', day_before)} : {};

    return this.http.get<any>(url, options).pipe(catchError(this.handleError));
    


  }

  
}
