import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdoptionComponent } from './adoption.component';

const adoptionRoutes: Routes = [
    {path: '', component: AdoptionComponent}
];

@NgModule({
    imports: [RouterModule.forChild(adoptionRoutes)],
    exports: [RouterModule]
})
export class AdoptionRoutingModule { }
