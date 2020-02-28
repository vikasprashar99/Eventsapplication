import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsSersviceService {

  constructor(private http: HttpClient) {}

  //END POINTS
  getallAlleventsEndpoint =
  "http://localhost:8000/getAllEvents";
postEventsdataEndpoint =
"http://localhost:8000/addEvent";
deleteEventsdataEndpoint =
"http://localhost:8000/deleteEvent";

//API'S
getAlleventsApiCall(): Observable<any> {
  return this.http.get<any>(this.getallAlleventsEndpoint);
}
postEventsDataApiCall(dataBody: any): Observable<any> {
  return this.http.post<any>(this.postEventsdataEndpoint, dataBody);
}
deleteEventsDataApiCall(dataBody: any): Observable<any> {
  return this.http.delete<any>(this.deleteEventsdataEndpoint, dataBody);
}


}