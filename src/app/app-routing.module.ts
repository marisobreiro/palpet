import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { AgendaComponent } from './components/agenda/agenda.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'agenda', component: AgendaComponent},
  {path: 'adoption', component: AdoptionComponent},
  {path: 'pets', loadChildren: () => import('./components/pets/pets.module').then(m => m.PetsModule)},
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
