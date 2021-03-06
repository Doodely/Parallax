import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'home',
  template: `<h1>Home Page</h1>`,
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class Home {

}