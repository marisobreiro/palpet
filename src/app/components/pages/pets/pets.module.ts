import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'
import { PetsRoutingModule } from './pets-routing.module';

import { ButtonsModule } from '../../UI/buttons/buttons.module';
import { NgxMaskModule } from 'ngx-mask';
import { MatIconModule } from '@angular/material/icon';

import { PetsComponent } from './pets.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetEditComponent } from './pet-edit/pet-edit.component';

@NgModule({
    declarations: [
        PetsComponent,
        PetFormComponent,
        PetEditComponent
    ],
    imports: [
        CommonModule,
        PetsRoutingModule,
        ButtonsModule,
        ReactiveFormsModule,
        MatIconModule,
        NgxMaskModule.forChild()
    ]
})
export class PetsModule { }
