import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators, FormGroupDirective} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm;
  

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name: new FormControl(''),
      emailFormControl : new FormControl('', [
        Validators.required,
        Validators.email,
      ]),
      message: new FormControl(''),
    });
  }

  onSubmit(formData:any, formDirective: FormGroupDirective):void {

    formDirective.resetForm();
    this.contactForm.reset();

    this._snackBar.open(`Thank you for reaching out. We'll get back to you as soon as possible.`, 'Close', {
      duration:3000,
    });
  }

  getErrorMessage() {
    if (this.contactForm.get('emailFormControl').hasError('required')) {
      return 'Email is required';
    }

    return this.contactForm.get('emailFormControl').hasError('email') ? 'Not a valid email' : '';
  }

}
