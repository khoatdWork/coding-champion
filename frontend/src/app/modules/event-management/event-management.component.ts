import { Component, OnInit } from '@angular/core';
import { ActionComponent } from './components/action/action.component';
import { CalendarViewComponent } from './components/calendar-view/calendar-view.component';
import { EventTypeComponent } from './components/event-type/event-type.component';

@Component({
  selector: 'app-event-management',
  templateUrl: './event-management.component.html',
  styleUrls: ['./event-management.component.scss'],
  standalone: true,
  imports: [ActionComponent, CalendarViewComponent, EventTypeComponent]
})
export class EventManagementComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
