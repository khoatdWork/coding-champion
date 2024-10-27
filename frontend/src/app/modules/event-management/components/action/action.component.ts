import { Component, OnInit } from '@angular/core';
import { ChevronLeft, ChevronRight, LucideAngularModule, Plus } from 'lucide-angular';
import { ButtonModule } from 'primeng/button';
import { ButtonGroupModule } from "primeng/buttongroup";

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.scss'],
  standalone: true,
  imports: [ButtonModule, ButtonGroupModule, LucideAngularModule]
})
export class ActionComponent implements OnInit {
  readonly ChevronLeft = ChevronLeft;
  readonly ChevronRight = ChevronRight;
  readonly Plus = Plus;

  constructor() { }

  ngOnInit() {
  }

}
