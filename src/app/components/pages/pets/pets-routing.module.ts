import { PetEditComponent } from './pet-edit/pet-edit.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { PetsComponent } from './pets.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const petRoutes: Routes = [
    {path: '', component: PetsComponent},
    {
        path: 'newpet',
        component: PetFormComponent,
    },
    {
        path: 'edit/:id',
        component: PetEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(petRoutes)],
    exports: [RouterModule]
})
export class PetsRoutingModule { }
