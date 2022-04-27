import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { PetsType } from 'src/app/interfaces/PetsType';
import { Contact } from '../../../../interfaces/Contact';
import { Pets } from '../../../../interfaces/Pets';

import { PettypeService } from '../../../../services/petstype/petstype.service';
import { ContactService } from '../../../../services/contact/contact.service';
import { PetlistService } from '../../../../services/petlist/petlist.service';

@Component({
    selector: 'app-pet-form',
    templateUrl: './pet-edit.component.html',
    styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent implements OnInit {

    types!: PetsType[];
    contacts!: Contact[];
    petForm!: FormGroup;
    pets!: Pets[];
    petId: any;

    back = 'arrow_back';
    backlink = '/pets';

    constructor(
        private servicePetType: PettypeService,
        private serviceContact: ContactService,
        private servicePetList: PetlistService,
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private location: Location
        ) { }

    ngOnInit(): void {
        this.servicePetType.listPetTypes()
        .subscribe(dados => this.types = dados);

        this.serviceContact.listContactTypes()
        .subscribe(itens => this.contacts = itens)

        this.petForm = this.formBuilder.group({
        id: ['pet.id'],
        name: ['', Validators.required],
        type: ['', Validators.required],
        breed: ['', Validators.required],
        pal: ['', Validators.required],
        contact: ['', [Validators.required]],
        typecontact: ['', Validators.required]
        })

        this.petId = this.route.snapshot.paramMap.get('id')
        this.servicePetList.getPetByID(this.petId).subscribe((pet) => {
            this.petForm.patchValue(pet);
        })

    }

    get name() {
        return this.petForm.get('name')!;
    }

    get type() {
        return this.petForm.get('type')!;
    }

    get breed() {
        return this.petForm.get('breed')!;
    }

    get pal() {
        return this.petForm.get('pal')!;
    }

    get contact() {
        return this.petForm.get('contact')!;
    }

    get typecontact() {
        return this.petForm.get('typecontact')!;
    }


  //Atualiza dos dados do pet
    updatePet() {
        if (this.petForm.invalid){
        return (
            window.alert('Algo errado aconteceu, por favor verifique se todos os campos estão preenchidos e tente novamente!')
        )
        } else {
        this.servicePetList.updatePet(this.petForm.value).subscribe(dados => {
            window.alert('Cadastro do pet atualizado com sucesso!');
            this.location.back();
        },
        );
        }
    }
}
