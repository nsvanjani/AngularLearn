import { Component, Input } from '@angular/core';
@Component({
    selector: 'app-users',
    template: `<input name ='nameInput' [(ngModel)]="name">
    <p>Hello {{ name }} I am the html</p>
    <p [textContent]="name_input"></p>`
})
export class UserComponent {
  name = 'Navin';
  @Input() name_input;
  onUserInput(even) {

    this.name = (<HTMLInputElement>event.target).value;
  }
}

