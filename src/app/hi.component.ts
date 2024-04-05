import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'hi',
  template: `<h1>Hi {{name}}!</h1>`,
  styles: [`h1 { font-family: Lato; }`]
})
export class HiComponent  {
  name = 'Angular ' + VERSION.major;
}
