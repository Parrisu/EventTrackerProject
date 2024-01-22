import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Donut } from '../models/donut';
import { Observable, catchError, throwError } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private url = environment.baseUrl + 'api/donuts';

  donut : Donut = new Donut();


  constructor(
    private http: HttpClient, private datePipe: DatePipe
    ){}

    index(): Observable<Donut[]> {
      return this.http.get<Donut[]>(this.url).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () => new Error('create : error')
          );
        })
      );
    }

    show(id: number): Observable<Donut> {
      return this.http.get<Donut>(this.url+"/"+id);
    }

    create(newDonut: Donut): Observable<Donut> {
      const httpOptions = {
        headers: {
          'Content-Type':  'application/json',
        }
      }
      return this.http.post<Donut>(this.url, newDonut, httpOptions).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () => new Error('create : error')
          );
        })
      );
    }

    update(id: number, donut: Donut): Observable<Donut> {
      return this.http.put<Donut>(this.url +'/'+ id, donut).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () => new Error('update : error')
          );
        })
      );
    }

    destroy(donutId: number): Observable<void> {
      return this.http.delete<void>(this.url +'/'+ donutId).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () => new Error('delete : error')
          );
        })
      );
    }
}
