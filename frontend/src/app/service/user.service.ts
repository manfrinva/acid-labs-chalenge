import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Backend's URL;
  private url:string = 'http://localhost:8080/user/';

  constructor(private http:HttpClient) { }

  selectAll():Observable<User[]>{
    return this.http.get<User[]>(this.url)
  }

  validation(login: number, senha: string): Observable<boolean> {
    const requestBody = {
      id: login,
      password: senha
    };
    return this.http.patch<boolean>(this.url + 'validation/', requestBody);
  }
}
