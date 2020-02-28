import { Component, OnInit } from '@angular/core';
import { EventsSersviceService } from '../events-sersvice.service';
import { Router } from '@angular/router';


export class Eventsdata{
  id:any;
  title: String;
  nameOfExpert:String;
  DateOfEvent:String;
  TimeOfEvent:String;
  description:String;
  location:String;
  mobilenumber:String;
}

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})


export class AlleventsComponent implements OnInit {
  EventsArray: Eventsdata[] = [];

    panelOpenState = false;

  constructor(private eService:EventsSersviceService, private router:Router) { }

  ngOnInit() {
  //  ASSIGNED EVENTS DATA TO BE SHOWN
    this.eService.getAlleventsApiCall().subscribe(res=>{
      console.log(res);
      for(const i in res){
        const ob=new Eventsdata();
        ob.id=res[i].uid
        ob.title=res[i].title;
        ob.nameOfExpert=res[i].nameOfExpert
        ob.DateOfEvent=res[i].DateOfEvent
        ob.TimeOfEvent=res[i].TimeOfEvent
        ob.description=res[i].description;
        ob.location=res[i].location
        ob.mobilenumber=res[i].mobilenumber
        this.EventsArray.push(ob)
      }
        console.log(this.EventsArray)
    })
}
Back(){
  this.router.navigate(['/addEvent'])
}



}