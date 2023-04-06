import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomComponent } from './components/room/room.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component'

@NgModule({
  declarations: [
    AppComponent,
    RoomComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
