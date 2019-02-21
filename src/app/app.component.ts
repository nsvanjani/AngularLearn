import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-essentials';
  root_name = 'rootNamel';

   onNameChanged(newName) {
   this.root_name = newName;

  }
}
