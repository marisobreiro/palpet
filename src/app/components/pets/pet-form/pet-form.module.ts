import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonsModule } from '../../UI/buttons/buttons.module';

import { MatIconModule } from '@angular/material/icon';

import { PetFormComponent } from './pet-form.component';



@NgModule({
  declarations: [
    PetFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatIconModule,
    ButtonsModule
  ]
})
export class PetFormModule { }
