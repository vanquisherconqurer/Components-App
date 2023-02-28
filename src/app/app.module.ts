import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import { BadgeComponent } from './badge/badge.component';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import { FormfieldComponent } from './formfield/formfield.component';
import {MatFormFieldModule} from '@angular/material/form-field';




@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    CardComponent,
    BadgeComponent,
    FormfieldComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatBadgeModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatFormFieldModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



