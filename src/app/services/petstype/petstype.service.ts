import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { PetsType } from 'src/app/interfaces/PetsType';

@Injectable({
  providedIn: 'root'
})
export class PettypeService {

  private urlAPI = `${environment.urlAPI}types`

  constructor(private http: HttpClient) { }

  listPetTypes() {
    return this.http.get<PetsType[]>(this.urlAPI);
  }
}
