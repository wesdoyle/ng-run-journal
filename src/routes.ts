import { Routes } from "@angular/router"
import { ActivityListComponent } from "./app/activity-list/activity-list.component"
import { MapComponent } from "./app/map/map.component"

export const appRoutes: Routes = [
  { path: "runs", component: ActivityListComponent },
  { path: "run/:id", component: MapComponent },
  { path: "", redirectTo: "/runs", pathMatch: 'full' }
]
