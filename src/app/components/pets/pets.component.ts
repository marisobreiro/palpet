import { Component, OnInit } from '@angular/core';
import { PetlistService } from '../../services/petlist/petlist.service';

import { Pets } from 'src/app/interfaces/Pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  back = 'arrow_back';
  backlink = '/';

  add = 'add';
  addpetlink = '/pets/newpet';

  edit = 'edit';
  editlink = '/';

  remove = 'delete';
  removelink = '/pets';

  pets!: Pets[];

  constructor(
    private service: PetlistService) { }

  ngOnInit(): void {
    this.service.listPets().subscribe(dados => this.pets = dados);
  }

  removePet(pet: Pets) {
    this.pets = this.pets.filter((a) => pet.name !== a.name); //Remove do front-end
    this.service.removePet(pet.id).subscribe(); //Comunica com o serviço
  }

}
