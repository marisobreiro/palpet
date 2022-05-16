import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { PetsType } from 'src/app/interfaces/PetsType';
import { Contact } from '../../../../interfaces/Contact';

import { PettypeService } from '../../../../services/petstype/petstype.service';
import { ContactService } from '../../../../services/contact/contact.service';
import { PetlistService } from '../../../../services/petlist/petlist.service';


@Component({
    selector: 'app-pet-form',
    templateUrl: './pet-form.component.html',
    styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

    types!: PetsType[];
    contacts!: Contact[];
    petForm!: FormGroup;

    back = 'arrow_back';
    backlink = '/pets';

    constructor(
        private servicePetType: PettypeService,
        private serviceContact: ContactService,
        private formBuilder: FormBuilder,
        private servicePetList: PetlistService,
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        this.servicePetType.listPetTypes()
        .subscribe(dados => this.types = dados);

        this.serviceContact.listContactTypes()
        .subscribe(itens => this.contacts = itens)

        this.petForm = this.formBuilder.group({
            id: [''],
            name: ['', Validators.required],
            type: ['Selecione um tipo', Validators.required],
            breed: ['', Validators.required],
            pal: ['', Validators.required],
            contact: ['', Validators.required],
            typecontact: ['Selecione um tipo', Validators.required]
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

    addPet() {
        if (this.petForm.invalid){
            console.log(this.petForm)
        return;
        } else {
            this.servicePetList.createPet(this.petForm.value).subscribe(dados => {
            window.alert('Pet cadastrado com sucesso!');
            window.location.reload(); //remover
            this.petForm.reset()
            },
        )}
    }
}
