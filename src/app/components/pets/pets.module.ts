import { PetFormModule } from './pet-form/pet-form.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PetsRoutingModule } from './pet.routing.module';
import { ButtonsModule } from './../UI/buttons/buttons.module';

import { PetsComponent } from './pets.component';
import { PetFormComponent } from './pet-form/pet-form.component';


@NgModule({
    declarations: [
    	PetsComponent
    ],
    imports: [
		  CommonModule,
      PetsRoutingModule,
      ButtonsModule,
      PetFormModule,
      FormsModule,
      ReactiveFormsModule
    ],
    exports: [],
    providers: [],
})

export class PetsModule { }
