import { PetlistService } from './../../services/petlist.service';
import { Component, OnInit } from '@angular/core';

import { Pets } from 'src/app/interfaces/Pets';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent implements OnInit {

  back = 'arrow_back';
  backlink = '/';

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
