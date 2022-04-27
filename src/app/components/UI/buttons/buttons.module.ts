import { RouterModule } from '@angular/router';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { IconButtonComponent } from './icon-button/icon-button.component';
import { FabButtonComponent } from './fab-button/fab-button.component';

@NgModule({
    declarations: [
        FabButtonComponent,
        IconButtonComponent
    ],
    imports: [
        CommonModule,
        MatIconModule,
        MatButtonModule,
        RouterModule
    ],
    exports: [
        FabButtonComponent,
        IconButtonComponent,
        CommonModule
    ],
})

export class ButtonsModule { }
