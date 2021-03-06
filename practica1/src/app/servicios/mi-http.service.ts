import { Injectable } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpErrorResponse,
  HttpResponse
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
};

@Injectable()
export class MiHttpService {
  public host: string = "http://localhost:8080/ApiVehiculos";

  constructor(public http: HttpClient) {

  }

  public httpGetOne<T>(action: string, id: string): Observable<T> {
    return this.http.get<T>(`${this.host}/${action}/${id}`, httpOptions).pipe(
      map(result => result),
      catchError(err => this.handleError(err))
    );
  }

  public httpGetAll<T>(action: string): Observable<Array<T>> {
    return this.http.get<Array<T>>(`${this.host}/${action}`, httpOptions).pipe(
      map(result => result),
      catchError(err => this.handleError(err))
    );
  }

  public httpPost<T>(action: string, objeto: any): Observable<T> {
    return this.http
      .post<T>(`${this.host}/${action}`, objeto, httpOptions)
      .pipe(
        map(result => result),
        catchError(err => this.handleError(err))
      );
  }

  public httpUpdate<T>(action: string, objeto: any): Observable<T> {
    return this.http
      .put<T>(`${this.host}/${action}/${objeto}`, objeto, httpOptions)
      .pipe(
        map(result => result),
        catchError(err => this.handleError(err))
      );
  }

  public httpDelete(action: string, id: number) {
    return this.http.delete(`${this.host}/${action}/${id}`, httpOptions);
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.log("An error occurred:", error.error.message);
    } else {
      console.log(`Backend returned code ${error.status}, ` + `body was: `);
      console.log(error.error);
    }
    return throwError("Something bad happened; please try again later.");
  }
}
