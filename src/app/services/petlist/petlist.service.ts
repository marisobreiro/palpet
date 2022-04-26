import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

import { Pets } from '../../interfaces/Pets';
import { take, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetlistService {

  private urlAPI = `${environment.urlAPI}pets`;

  constructor(private http: HttpClient) { }

  listPets() {
    return this.http.get<Pets[]>(this.urlAPI);
  }

  removePet(id: number){
    return this.http.delete<Pets>(`${this.urlAPI}/${id}`);
  }

  create(pet: any) {
    return this.http.post(this.urlAPI, pet).pipe(take(1));
  }
}
