import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Event } from 'src/app/models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor( private http: HttpClient ) { }

  getAllEvents() {
    return this.http.get(`http://localhost:8000/allevents`);
  }

  submitEvent(event : Event) {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers };
    return this.http.post(`http://localhost:8000/createevent`,event, options);
  }

  // deleteEvent(name : string) {
  //   let headers = new HttpHeaders({'Content-Type': 'application/json'});
  //   //let httpParams = new HttpParams().set('name', name);
  //   let options = { headers: headers};
  //   return this.http.delete(`http://localhost:8000/deleteevent/` + name, options);
  // }

}
