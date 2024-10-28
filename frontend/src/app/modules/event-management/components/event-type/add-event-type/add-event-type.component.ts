import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ColorPickerModule } from 'primeng/colorpicker';
import { EventTypeModel } from '../event-type.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-event-type',
  templateUrl: './add-event-type.component.html',
  styleUrls: ['./add-event-type.component.scss'],
  standalone: true,
  imports: [InputTextModule, ButtonModule, ColorPickerModule, FormsModule]
})
export class AddEventTypeComponent implements OnInit {

  

  public eventType: EventTypeModel = {
    name: "",
    color: "",
    created_by: ""
  }

  constructor() { }

  ngOnInit() {
  }

}
