import { ActivatedRoute } from '@angular/router';
import { PetlistService } from './../../../services/petlist/petlist.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { PetsType } from 'src/app/interfaces/PetsType';
import { Contact } from './../../../interfaces/Contact';

import { PettypeService } from '../../../services/petstype/petstype.service';
import { ContactService } from './../../../services/contact/contact.service';
import { map, switchMap } from 'rxjs';
import { HttpParams } from '@angular/common/http';



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
    private servicePetList: PetlistService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    //Form select content
    this.servicePetType.listPetTypes()
    .subscribe(dados => this.types = dados);

    this.serviceContact.listContactTypes()
    .subscribe(itens => this.contacts = itens)

    //Form
    this.petForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      type: ['', Validators.required],
      breed: ['', Validators.required],
      pal: ['', Validators.required],
      contact: ['', [Validators.required]],
      typecontact: ['', Validators.required]
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


  //Submit
  addPet() {
    if (this.petForm.invalid){
      console.log(this.petForm)
      return;
    } else {
      this.servicePetList.create(this.petForm.value).subscribe(dados => {
        console.log(dados);

        this.petForm.reset()
      },
      );
    }
  }

}
