import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {

  private apiUrl = 'http://localhost:8080/api/data';  // URL da API Spring Boot

  constructor(private http: HttpClient) {}

  getData(): Observable<string> {
    return this.http.get<string>(this.apiUrl);
  }
}