import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  private regexLetters = /[a-zA-Z]/;
  private regexNumbers = /\d/;
  private regexSymbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  firstSectionColor = 'gray';
  secondSectionColor = 'gray';
  thirdSectionColor = 'gray';

  constructor() { }

  ngOnInit() {
    this.form.get('password')?.valueChanges.subscribe((value: string) => {
      this.checkPassword(value);
    });
  }

  checkPassword(value: string) {
    const hasLetters = this.regexLetters.test(value);
    const hasDigits = this.regexNumbers.test(value);
    const hasSymbols = this.regexSymbols.test(value);

    if (!value) {
      this.firstSectionColor = 'gray';
      this.secondSectionColor = 'gray';
      this.thirdSectionColor = 'gray';
    } else if (value.length < 8) {
      this.firstSectionColor = 'red';
      this.secondSectionColor = 'red';
      this.thirdSectionColor = 'red';
    } else if (hasLetters && hasDigits && hasSymbols) {
      this.firstSectionColor = 'green';
      this.secondSectionColor = 'green';
      this.thirdSectionColor = 'green';
    } else if (
      (hasLetters && hasDigits && !hasSymbols)
      || (hasLetters && !hasDigits && hasSymbols)
      || (!hasLetters && hasDigits && hasSymbols)
    ) {
      this.firstSectionColor = 'yellow';
      this.secondSectionColor = 'yellow';
      this.thirdSectionColor = 'gray';
    } else {
      this.firstSectionColor = 'red';
      this.secondSectionColor = 'gray';
      this.thirdSectionColor = 'gray';
    }
  }
}
