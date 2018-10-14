import { Component } from '@angular/core';
@Component({
    selector: 'app-users',
    template: `<input name ='nameInput' [(ngModel)]="name">
    <p>Hello {{ name }} I am the html</p>`
})
export class UserComponent {
  name = 'Navin';

  onUserInput(even) {

    this.name = (<HTMLInputElement>event.target).value;
  }
}

