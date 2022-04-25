import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdoptionComponent } from './components/adoption/adoption.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { HomeComponent } from './components/home/home.component';
import { PetsComponent } from './components/pets/pets.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pets', component: PetsComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'adoption', component: AdoptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
