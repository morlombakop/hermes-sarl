import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  @Input() isSmallAndBelow = false;
  contactForm: FormGroup;
  cols = 5;
  formColspan = 2;
  mapColspan = 3;

  ngOnInit() {
    this.contactForm = new FormGroup({
      title: new FormControl(),
      email: new FormControl(null, [Validators.required, Validators.email]),
      firstName: new FormControl(),
      lastName: new FormControl(),
      company: new FormControl(),
      phoneNumber: new FormControl(),
      message: new FormControl('', [Validators.required]),
    });

    if (this.isSmallAndBelow) {
      this.cols = 1;
      this.formColspan = 1;
      this.mapColspan = 1;
    }

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
