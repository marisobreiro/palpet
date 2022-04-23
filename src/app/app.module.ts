import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/UI/loader/loader.component';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AdoptionComponent } from './components/adoption/adoption.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    ListPetsComponent,
    AgendaComponent,
    AdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
