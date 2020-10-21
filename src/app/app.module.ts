import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QumlLibraryModule } from 'quml-library';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QumlLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
