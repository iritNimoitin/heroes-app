import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Tour of Heros';
  onSave(){
    console.log("saved")
  }
  onToggel(){
this.title = this.title ? '' :"Tour Of Heros"
  }
}
