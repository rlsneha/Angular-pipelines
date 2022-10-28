import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { registerLocaleData } from '@angular/common';
import localeFrench from '@angular/common/locales/fr';
import { SortPipe } from './sort.pipe';
import { FormsModule } from '@angular/forms';
registerLocaleData(localeFrench);
@NgModule({
  declarations: [
    AppComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

