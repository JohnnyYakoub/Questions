import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { MergesystemsComponent } from './system/mergesystems/mergesystems.component';
import { KillsystemComponent } from './system/killsystem/killsystem.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    MergesystemsComponent,
    KillsystemComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
