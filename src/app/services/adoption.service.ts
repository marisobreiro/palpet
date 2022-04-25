import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Adoption } from '../interfaces/Adoption';

@Injectable({
  providedIn: 'root'
})
export class AdoptionService {

  private urlAPI = `${environment.urlAPI}adoption`;

  constructor(private http: HttpClient) { }

  listAdoption() {
    return this.http.get<Adoption[]>(this.urlAPI);
  }
}
