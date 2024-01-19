import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  private url = environment.baseUrl + 'api/donuts';

  constructor(
    private http: HttpClient
    ){}
}
