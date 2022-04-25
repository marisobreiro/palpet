import { Component, OnInit } from '@angular/core';
import { PetlistService } from '../../services/petlist.service';

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
  removelink = '/';

  pets?: Pets[];

  constructor(private service: PetlistService) { }

  ngOnInit(): void {
    this.service.listPets().subscribe(dados => this.pets = dados);
  }

}
