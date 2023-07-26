import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PasswordFormService {
  checkPassword(value: string): string[] {
    const hasLetters = /[a-zA-Z]/.test(value);
    const hasDigits = /\d/.test(value);
    const hasSymbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(value);

    if (!value) {
      return ['gray', 'gray', 'gray'];
    } else if (value.length < 8) {
      return ['red', 'red', 'red'];
    } else if (hasLetters && hasDigits && hasSymbols) {
      return ['green', 'green', 'green'];
    } else if (
      (hasLetters && hasDigits && !hasSymbols)
      || (hasLetters && !hasDigits && hasSymbols)
      || (!hasLetters && hasDigits && hasSymbols)
    ) {
      return ['yellow', 'yellow', 'gray'];
    } else {
      return ['red', 'gray', 'gray'];
    }
  }
}
