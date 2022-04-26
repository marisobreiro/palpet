import { PetFormComponent } from './pet-form/pet-form.component';
import { PetsComponent } from './pets.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const petRoutes: Routes = [
  {path: '', component: PetsComponent},
  {path: 'newpet', component: PetFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(petRoutes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
