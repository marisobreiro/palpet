import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgendaRoutingModule } from './agenda.routing.module';

import { ButtonsModule } from '../../UI/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core';

import { AgendaComponent } from './agenda.component';

@NgModule({
    declarations: [
        AgendaComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        AgendaRoutingModule
    ]
})
export class AdoptionModule { }
