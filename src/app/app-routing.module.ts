import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';


const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'agenda', loadChildren: () => import('./components/pages/agenda/agenda.module').then(m => m.AdoptionModule)},
  {path: 'adoption', loadChildren: () => import('./components/pages/adoption/adoption.module').then (m => m.AdoptionModule)},
  {path: 'pets', loadChildren: () => import('./components/pages/pets/pets.module').then(m => m.PetsModule)},
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
