import {RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import { GetComponent } from './components/get/get.component';
import { FormsModule } from '@angular/forms';
import { ImageFilterPipe } from './pipes/images-filter.pipe';

@NgModule({
  declarations: [AppComponent, HomeComponent, GetComponent, ImageFilterPipe],
  imports: [BrowserModule, RouterModule, HttpClientModule, FormsModule],
  exports: [AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
