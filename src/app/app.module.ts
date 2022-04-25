import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Custom modules
import { PetsModule } from './components/pets/pets.module';
import { ButtonsModule } from './components/UI/buttons/buttons.module';

// Material Design
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoaderComponent } from './components/UI/loader/loader.component';
import { AgendaComponent } from './components/agenda/agenda.component';
import { AdoptionComponent } from './components/adoption/adoption.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoaderComponent,
    AgendaComponent,
    AdoptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PetsModule,
    ButtonsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
