import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar} from "@angular/material";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EventsSersviceService } from '../events-sersvice.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-event-dialog',
  templateUrl: './event-dialog.component.html',
  styleUrls: ['./event-dialog.component.css']
})
export class EventDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<EventDialogComponent>,private _snackBar: MatSnackBar,private eservice:EventsSersviceService
    ) { }

  ngOnInit() {
  }
//FORM CONTROLS FOR FIELDS
    title= new FormControl("", [Validators.required])
    nameOfExpert= new FormControl("", [Validators.required])
    DateOfEvent= new FormControl("", [Validators.required])
    TimeOfEvent= new FormControl("", [Validators.required])
    description= new FormControl("", [Validators.required])
    location= new FormControl("", [Validators.required])
    mobilenumber= new FormControl("", [Validators.required])


    // VALIDATORS
getUsernameMessage(){
  return this.title.hasError("required")
  ? "You must enter a Title"
  : "";
}
getnameOfExpertMessage(){
  return this.nameOfExpert.hasError("required")
  ? "You must enter a value"
  : "";
}
getDateOfEventMessage(){
  return this.DateOfEvent.hasError("required")
  ? "You must enter a value"
  : "";
}
getTimeOfEventMessage(){
  return this.TimeOfEvent.hasError("required")
  ? "You must enter a value"
  : "";
}
getdescriptionMessage(){
  return this.description.hasError("required")
  ? "You must enter a value"
  : "";
}
getlocationMessage(){
  return this.location.hasError("required")
  ? "You must enter a value"
  : "";
}
getmobilenumberMessage(){
  return this.mobilenumber.hasError("required")
  ? "You must enter a value"
  : "";
}
// AFTER SUBMITTING THE DATA
  onSubmit() {
  var data={
    uid:uuidv4(),
title:this.title.value,
nameOfExpert:this.nameOfExpert.value,
DateOfEvent:this.nameOfExpert.value,
TimeOfEvent:this.TimeOfEvent.value,
description:this.description.value,
location:this.location.value,
mobilenumber:this.mobilenumber.value
  }
    if (
      this.title.value == "" ||
      this.nameOfExpert.value == "" ||
      this.DateOfEvent.value == "" ||
      this.TimeOfEvent.value == "" ||
      this.description.value == "" ||
      this.location.value == "" ||
      this.mobilenumber.value == ""  ) {
      const message = "Plase fill all the fields correctly ";
      const action = "Try again";
      this._snackBar.open(message, action, {
        duration: 2000
      });
    }
    else{
this.eservice.postEventsDataApiCall(data).subscribe(res =>{
})
const message = "Successfullt added a Event ";
  const action = "";
  this._snackBar.open(message, action, {
    duration: 2000
  });
  this.dialogRef.close();
    } 
  }
}
