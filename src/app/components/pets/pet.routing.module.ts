import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';

import { PetFormComponent } from './pet-form/pet-form.component';
import { PetsComponent } from './pets.component';

const petsRoutes = [
  {path: 'pets', component: PetsComponent},
  {path: 'pets/newpet', component: PetFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(petsRoutes)],
  exports: [RouterModule],
})

export class PetsRoutingModule { }
