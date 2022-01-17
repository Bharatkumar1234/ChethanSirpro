import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerTabelComponent } from './customer-tabel/customer-tabel.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerTabelComponent,
    CustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
