import { NgModule } from "@angular/core";
import { Route, RouterModule } from "@angular/router";
import { HelloComponent } from "./hello.component";
import { HiComponent } from "./hi.component";

export const helloRoutes: Route[] = [
  {
    path: '',
    component: HelloComponent
  }
];

export const hiRoutes: Route[] = [
  {
    path: '',
    component: HiComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(helloRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
