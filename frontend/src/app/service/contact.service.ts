import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  //Backend's URL;
  private url:string = 'http://localhost:8080/contact/';

  constructor(private http:HttpClient) { }

  selectAll():Observable<Contact[]>{
    return this.http.get<Contact[]>(this.url)
  }

  selectById(id:Number):Observable<Contact>{
    return this.http.get<Contact>(this.url+id);
  }

  createContact(obj:Contact):Observable<Contact>{
    return this.http.post<Contact>(this.url, obj);
  }

  updateContact(obj:Contact):Observable<Contact>{
    return this.http.put<Contact>(this.url, obj);
  }

  deleteById(id:Number):Observable<void>{
    return this.http.delete<void>(this.url+id);
  }
}
