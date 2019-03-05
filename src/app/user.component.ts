import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-users',
    template: ` <!--<input name ='nameInput' [(ngModel)]="name">-->
    <input type="text"  [value]="name">
    <p>Hello {{ name }} I am the html</p>
    <p [textContent]="name"></p>
    <app-user-detail></app-user-detail>
    `
})
export class UserComponent {

  @Input() name;
  @Output () name_changed = new EventEmitter <String>();
  onUserInput(event) {
    this.name_changed.emit(event.target.value);
    // this.name = (<HTMLInputElement>event.target).value;
  }
}

