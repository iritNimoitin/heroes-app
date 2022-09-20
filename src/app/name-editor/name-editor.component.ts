import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.scss']
})
export class NameEditorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  name = new FormControl('');

  //set value
  updateName() {
    this.name.setValue('Nancy');
   }
   

}