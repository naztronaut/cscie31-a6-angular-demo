import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScoresComponent } from './scores/scores.component';
import {ScoreService} from './score.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ScoresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
