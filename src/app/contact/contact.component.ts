import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  // contact = {
  //   title: '',
  //   firstName: '',
  //   lastName: '',
  //   company: '',
  //   email: '',
  //   phoneNumber: '',
  //   message: '',
  // };

  contactForm: FormGroup;

  ngOnInit(): void {
    this.contactForm = new FormGroup({
      title: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(),
      lastName: new FormControl(),
      company: new FormControl(),
      phoneNumber: new FormControl(),
      message: new FormControl('', [Validators.required]),
    });

    // this.contactForm.valueChanges.subscribe((data) => console.log(data));
  }

  get title() {
    return this.contactForm.get('title');
  }

  get firstName() {
    return this.contactForm.get('firstName');
  }

  get lastName() {
    return this.contactForm.get('lastName');
  }

  get company() {
    return this.contactForm.get('company');
  }

  get email() {
    return this.contactForm.get('email');
  }

  get phoneNumber() {
    return this.contactForm.get('phoneNumber');
  }

  get message() {
    return this.contactForm.get('message');
  }
}
