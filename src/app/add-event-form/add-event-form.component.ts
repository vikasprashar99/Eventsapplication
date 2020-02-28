import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { EventDialogComponent } from '../event-dialog/event-dialog.component';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-event-form',
  templateUrl: './add-event-form.component.html',
  styleUrls: ['./add-event-form.component.css']
})
export class AddEventFormComponent implements OnInit {

  constructor(private dialog: MatDialog,private router: Router) {}

  ngOnInit() {
  }
  // OPEN DIALOG BUTTON
  openDialog() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;

    this.dialog.open(EventDialogComponent,{width: '550px',
  });
}
showAllEvents(){
  this.router.navigate(['/allEvents'])
}
}
