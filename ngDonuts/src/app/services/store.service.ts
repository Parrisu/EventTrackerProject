import { Store } from './../models/store';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  private url = environment.baseUrl + 'api/stores';

  store : Store = new Store();


  constructor(
    private http: HttpClient
    ){}

    index(): Observable<Store[]> {
      return this.http.get<Store[]>(this.url).pipe(
        catchError((err: any) => {
          console.error(err);
          return throwError(
            () => new Error('create : error')
          );
        })
      );
    }

    show(id: number): Observable<Store> {
      return this.http.get<Store>(this.url+"/"+id);
    }

}
