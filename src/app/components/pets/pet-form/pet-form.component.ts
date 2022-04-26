import { PetlistService } from './../../../services/petlist/petlist.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { PetsType } from 'src/app/interfaces/PetsType';
import { Contact } from './../../../interfaces/Contact';

import { PettypeService } from '../../../services/petstype/petstype.service';
import { ContactService } from './../../../services/contact/contact.service';



@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.css']
})
export class PetFormComponent implements OnInit {

  types!: PetsType[];

  contacts!: Contact[];

  petForm!: FormGroup;

  //Buttons data
  back = 'arrow_back';
  backlink = '/pets';

  constructor(
    private servicePetType: PettypeService,
    private serviceContact: ContactService,
    private formBuilder: FormBuilder,
    private servicePetList: PetlistService
    ) { }

  ngOnInit(): void {

    //Form select lists
    this.servicePetType.listPetTypes()
    .subscribe(dados => this.types = dados);

    this.serviceContact.listContactTypes()
    .subscribe(itens => this.contacts = itens)

    //Form validation

    this.petForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      breed: ['', Validators.required],
      pal: ['', Validators.required],
      contact: ['', Validators.required],
      typecontact: ['', Validators.required]
    })
  }

  get name() {
    return this.petForm.get('name')!;
  }

  //Submit
  addPet() {
    if (this.petForm.invalid){
      return;
    }
    console.log(this.petForm.value)!;
    this.servicePetList.create(this.petForm.value).subscribe(
      sucess => {
        console.log('Pet criado!');
      },
      error => console.log(error),
      () => console.log('Request completa!')
    );
  }

}
