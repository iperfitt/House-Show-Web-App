import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
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
    return this.http.post(`http://localhost:8000/createEvent`,event, null);
  }

}
