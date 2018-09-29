import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DecComponent } from './dec/dec.component';
import { HexComponent } from './hex/hex.component';
import { BinComponent } from './bin/bin.component';
import { OtcComponent } from './otc/otc.component';

@NgModule({
  declarations: [
    AppComponent,
    DecComponent,
    HexComponent,
    BinComponent,
    OtcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
