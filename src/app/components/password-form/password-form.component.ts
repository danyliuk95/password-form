import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PasswordFormService } from './password-form.service';

@Component({
  selector: 'app-password-form',
  templateUrl: './password-form.component.html',
  styleUrls: ['./password-form.component.scss']
})
export class PasswordFormComponent implements OnInit {
  form: FormGroup = new FormGroup({
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });
  passwordSections: string[] = ['gray', 'gray', 'gray'];

  constructor(private passwordFormService: PasswordFormService) { }

  ngOnInit() {
    this.form.get('password')?.valueChanges.subscribe((value: string) => {
      this.passwordSections = this.passwordFormService.checkPassword(value);
    });
  }
}
