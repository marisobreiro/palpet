import { Contact } from './../../../interfaces/Contact';
import { ContactService } from './../../../services/contact/contact.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { PetsType } from 'src/app/interfaces/PetsType';


import { PettypeService } from '../../../services/petstype/petstype.service';


@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  form?: FormGroup;

  types!: PetsType[];

  contacts!: Contact[];

  back = 'arrow_back';
  backlink = '/pets';

  constructor(
    private formBulder: FormBuilder,
    private servicePetType: PettypeService,
    private serviceContact: ContactService
    ) { }

  ngOnInit(): void {

    this.form = this.formBulder.group({
      nome: [null],
      type: [null],
      breed: [null],
      pal: [null],
      contact: [null]
    })

    this.servicePetType.listPetTypes()
    .subscribe(dados => this.types = dados);

    this.serviceContact.listContactTypes()
    .subscribe(itens => this.contacts = itens)

  }

}
