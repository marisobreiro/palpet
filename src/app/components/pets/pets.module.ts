import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'

import { PetsRoutingModule } from './pets-routing.module';
import { ButtonsModule } from './../UI/buttons/buttons.module';

import { PetsComponent } from './pets.component';
import { PetFormComponent } from './pet-form/pet-form.component';

@NgModule({
  declarations: [
    PetsComponent,
    PetFormComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    ButtonsModule,
    ReactiveFormsModule
  ]
})
export class PetsModule { }
