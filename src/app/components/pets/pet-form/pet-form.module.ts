import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ButtonsModule } from '../../UI/buttons/buttons.module';

import { MatIconModule } from '@angular/material/icon';

import { PetFormComponent } from './pet-form.component';
import { InputComponent } from './../../UI/forms/input/input.component';

@NgModule({
  declarations: [
    PetFormComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    ButtonsModule
  ]
})
export class PetFormModule { }
