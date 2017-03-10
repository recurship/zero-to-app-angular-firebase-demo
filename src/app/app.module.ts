import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyDrlShh3TLtYTPOf2DNzVVMP5IZD2hoG4w',
  authDomain: 'zwitter-53bc9.firebaseapp.com',
  databaseURL: 'https://zwitter-53bc9.firebaseio.com',
  storageBucket: 'zwitter-53bc9.appspot.com',
  messagingSenderId: '342030132721'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
