import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  registerUser(user):Observable<any> {
    return this.http.post('http://127.0.0.1:3000/products', user);
  }

  getUsers() {
    return this.http.get('http://127.0.0.1:3000/products');
  }

  
}
