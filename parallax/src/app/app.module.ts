import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { AboutComponent } from './components/about/about.component';
import { Home } from './components/home/home.component';
import { NotFound } from './components/status/notfound.component';

import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent, UserComponent, AboutComponent, Home, NotFound
  ],
  imports: [
    BrowserModule, NgbModule.forRoot(), FormsModule, HttpModule, routing, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
