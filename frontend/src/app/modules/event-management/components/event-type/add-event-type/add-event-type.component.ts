import { Component, OnInit } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-add-event-type',
  templateUrl: './add-event-type.component.html',
  styleUrls: ['./add-event-type.component.scss'],
  standalone: true,
  imports: [InputTextModule, ButtonModule]
})
export class AddEventTypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
