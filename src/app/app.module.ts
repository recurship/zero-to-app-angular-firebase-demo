import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZwitterComponent } from './zwitter/zwitter.component';
import { LoginComponent } from './login/login.component';

import { Angulartics2Module, Angulartics2GoogleAnalytics } from 'angulartics2';

export const firebaseConfig = {
  apiKey: 'AIzaSyDrlShh3TLtYTPOf2DNzVVMP5IZD2hoG4w',
  authDomain: 'zwitter-53bc9.firebaseapp.com',
  databaseURL: 'https://zwitter-53bc9.firebaseio.com',
  storageBucket: 'zwitter-53bc9.appspot.com',
  messagingSenderId: '342030132721'
};

@NgModule({
  declarations: [
    AppComponent,
    ZwitterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    Angulartics2Module.forRoot([ Angulartics2GoogleAnalytics ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
