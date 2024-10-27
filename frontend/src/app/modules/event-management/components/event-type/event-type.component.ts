import { Component, OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AddEventTypeComponent } from './add-event-type/add-event-type.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-event-type',
  templateUrl: './event-type.component.html',
  styleUrls: ['./event-type.component.scss'],
  standalone: true,
  imports: [ButtonModule, OverlayPanelModule, AddEventTypeComponent  ]
})
export class EventTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
