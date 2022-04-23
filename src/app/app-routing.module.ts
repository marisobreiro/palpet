import { AdoptionComponent } from './components/adoption/adoption.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'pets', component: ListPetsComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'adoption', component: AdoptionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
