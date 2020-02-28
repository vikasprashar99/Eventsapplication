import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEventFormComponent } from './add-event-form/add-event-form.component';
import { Routes, RouterModule } from "@angular/router";
import { AlleventsComponent } from './allevents/allevents.component';

// FOR ROUTING AND NAVIGATION TO OTHER COMPONENTS
const routes: Routes = [
  { path: "", redirectTo: "addEvent", pathMatch: "full" },
  { path: "addEvent", component: AddEventFormComponent },
  { path: "allEvents", component: AlleventsComponent },

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
