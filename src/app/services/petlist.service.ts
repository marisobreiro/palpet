import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Pets } from '../interfaces/Pets';

@Injectable({
  providedIn: 'root'
})
export class PetlistService {

  private urlAPI = `${environment.urlAPI}pets`;

  constructor(private http: HttpClient) { }

  listPets() {
    return this.http.get<Pets[]>(this.urlAPI);
  }
}
