import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';

@Component({
  selector: 'event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  constructor(private eventService: EventService) { }

  ngOnInit() {}
  
  events = []
  

    getEvents() {
      this.eventService.getAllEvents().subscribe(
        (val: any) => this.events = val);  
    }

}
