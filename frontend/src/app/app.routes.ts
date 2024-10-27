import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "event",
    pathMatch: "full"
  },
  {
    path: "event",
    loadComponent: () => import("./modules/event-management/event-management.component").then((m) => m.EventManagementComponent)
  }
];
