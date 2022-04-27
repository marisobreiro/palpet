import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pets } from 'src/app/interfaces/Pets';

import { PetlistService } from 'src/app/services/petlist/petlist.service';

@Component({
  selector: 'app-pet-edit',
  templateUrl: './pet-edit.component.html',
  styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

  pet!: Pets;

  constructor(private petListService: PetlistService, private route: ActivatedRoute) { }

  ngOnInit(): void {}

}
