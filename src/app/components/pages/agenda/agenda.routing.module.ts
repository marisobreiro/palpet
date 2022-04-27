import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgendaComponent } from './agenda.component';

const adoptionRoutes: Routes = [
  {path: '', component: AgendaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(adoptionRoutes)],
  exports: [RouterModule]
})
export class AgendaRoutingModule { }
