import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

import { Contact } from 'src/app/interfaces/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private urlAPI = `${environment.urlAPI}contact`

  constructor(private http: HttpClient) { }

  listContactTypes() {
    return this.http.get<Contact[]>(this.urlAPI);
  }
}
