import { Contact } from './../../../interfaces/Contact';
import { ContactService } from './../../../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { PetsType } from 'src/app/interfaces/PetsType';


import { PettypeService } from '../../../services/petstype/petstype.service';


@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  petForm!: FormGroup;

  types!: PetsType[];

  contacts!: Contact[];

  //HTML data

  back = 'arrow_back';
  backlink = '/pets';

  text = 'text';
  number = 'number';

  petnamelabel = 'Nome do pet'
  petnameph = 'Insira o nome do pet aqui'
  petnamemaxl = 30;

  breedlabel = 'Tipo da raça';
  breedplaceholder = 'Digite o nome da raça do pet';
  breedmaxlenght = 15;

  palname = 'Pal (Responsável pelo pet)';
  palplaceholder = 'Digite o nome do responsável'
  palmaxlength = 20;

  contactname = 'Contato';
  contactplaceholder = "Insira o número do responsável"
  contactmaxlenght = 12;

  //

  constructor(
    private formBuilder: FormBuilder,
    private servicePetType: PettypeService,
    private serviceContact: ContactService
    ) { }

  ngOnInit(): void {

    this.petForm = this.formBuilder.group({
      id: [null],
      name: [null, Validators.required],
      type: [null],
      breed: [null],
      pal: [null],
      contact: [null]
    });

    this.servicePetType.listPetTypes()
    .subscribe(dados => this.types = dados);

    this.serviceContact.listContactTypes()
    .subscribe(itens => this.contacts = itens)
  }

  get name() {
    return this.petForm.get('name')!;
  }

  addPet() {
    if (this.petForm.invalid) {
      return;
    }
    console.log('Enviou o form')
  }

}
