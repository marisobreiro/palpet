import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdoptionRoutingModule } from './adoption.routing.module';

import { ButtonsModule } from '../../UI/buttons/buttons.module';
import { MatIconModule } from '@angular/material/icon';

import { AdoptionComponent } from './adoption.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
    declarations: [
        AdoptionComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        ButtonsModule,
        MatIconModule,
        AdoptionRoutingModule
    ]
})
export class AdoptionModule { }
