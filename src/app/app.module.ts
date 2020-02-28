import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatCardModule } from "@angular/material/card";
import { MatTooltipModule } from "@angular/material/tooltip";
import {
  MatNativeDateModule,
  MatIconModule
} from "@angular/material";
import { MatMenuModule } from "@angular/material/menu";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatChipsModule} from '@angular/material/chips';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatDialogModule} from "@angular/material";

import { AppComponent } from './app.component';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { AppRoutingModule } from './app-routing.module';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { AlleventsComponent } from './allevents/allevents.component';

@NgModule({
  declarations: [
    AppComponent,
    AddEventFormComponent,
    EventDialogComponent,
    AlleventsComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    MatSnackBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatIconModule,
    MatNativeDateModule,
    MatCardModule,
    MatTooltipModule,
    MatExpansionModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EventDialogComponent]
})
export class AppModule { }
