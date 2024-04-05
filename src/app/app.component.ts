import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { helloRoutes, hiRoutes } from './app-routing.module';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  routes = helloRoutes;

  constructor(private readonly router: Router) {}

  swapRoutes() {
    this.routes = this.routes === helloRoutes
      ? hiRoutes : helloRoutes;
    console.log('Swapping routes - ', this.routes[0].component.name)
    this.router.resetConfig(this.routes);
    this.router.navigate([ '/' ]);
  }
}
