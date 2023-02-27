import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormFieldErrorExample } from './formfield/formfield.component';
import { TableBasicExample } from './tables/tables.component';
import { ToolbarBasicExample } from './toolbar/toolbar.component';
import { CardFancyExample } from './card/card.component';
import { DateRangePickerOverviewExample } from './datepicker/datepicker.component';
import { InputErrorStateMatcherExample } from './input/input.component';
import { ProgressBarBufferExample } from './progressbar/progressbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FormFieldErrorExample,
    TableBasicExample,
    ToolbarBasicExample,
    CardFancyExample,
    DateRangePickerOverviewExample,
    InputErrorStateMatcherExample,
    ProgressBarBufferExample,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    BrowserAnimationsModule,
    MatSlideToggleModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
