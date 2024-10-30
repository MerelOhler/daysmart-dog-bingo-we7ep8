import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BingoInputsComponent } from './bingo-inputs/bingo-inputs.component';

@NgModule({
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [],
  declarations: [AppComponent, BingoInputsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
