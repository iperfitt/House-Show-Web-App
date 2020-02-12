import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/models/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-creation-form',
  templateUrl: './event-creation-form.component.html',
  styleUrls: ['./event-creation-form.component.css']
})
export class EventCreationFormComponent implements OnInit {

  model = new Event(0,"", "")

  constructor(private eventService: EventService) { }

  submitEvent() {
  this.eventService.submitEvent(this.model).subscribe(
    (val: any) => console.log(val)); 
  }
  
  ngOnInit() {
  }
}
