import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { UsersService } from './services/users.service';
import { TrajetsService } from './services/trajets.service';
import { VillesService } from './services/villes.service';
import { PropositionsService } from './services/propositions.service';

import { RegisterComponent } from './register/register.component';
import { CreerTrajetComponent } from './creer-trajet/creer-trajet.component';
import { LoginComponent } from './login/login.component';
import { PropositionComponent } from './proposition/proposition.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { TrajetsComponent } from './trajets/trajets.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    CreerTrajetComponent,
    LoginComponent,
    PropositionComponent,
    AdminProfileComponent,
    TrajetsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UsersService,TrajetsService,VillesService,PropositionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
