import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.scss']
})
// export class ProfileEditorComponent {
//  profileForm = new FormGroup({
//  firstName: new FormControl(''),
//  lastName: new FormControl(''),
//  address: new FormGroup({
//  street: new FormControl(''),
//  city: new FormControl(''),
//  state: new FormControl(''),
//  zip: new FormControl('')
//  })
//  });
export class ProfileEditorComponent {
  profileForm = this.fb.group({
  firstName: ['', Validators.required],
  lastName: [''],
  address: this.fb.group({
  street: [''],
  city: [''],
  state: [''],
  zip: ['']
  }),
  });
  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
   }
  
   updateProfile() {
    this.profileForm.patchValue({
    firstName: 'Nancy',
    address: {
    street: '123 Drew Street'
    }
    });
   }
 }
 

 
 

