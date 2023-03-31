import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//importiamo l'httpClientMOdule sia in questa riga e sia nel json imports per poter
//effettuare le chiamate http alla nostra API
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
