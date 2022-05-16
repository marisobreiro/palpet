import { Component, OnInit } from '@angular/core';
import { PetlistService } from '../../../services/petlist/petlist.service';

import { Pets } from 'src/app/interfaces/Pets';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-pets',
    templateUrl: './pets.component.html',
    styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

    back = 'arrow_back';
    backlink = '/home';

    add = 'add';
    addpetlink = 'newpet';

    remove = 'delete';
    removelink = '/pets';

    pets!: Pets[];

    constructor(
        private service: PetlistService,

        ) { }

    ngOnInit(): void {
        this.service.listPets().subscribe(dados => this.pets = dados);
    }

    removePet(pet: Pets) {
        this.pets = this.pets.filter((a) => pet.name !== a.name); 
        this.service.removePet(pet.id).subscribe();
    }


}
