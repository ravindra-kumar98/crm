import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class PasswordValidator {
  static validate(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    // Check if the password matches the desired pattern
    if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(password)) {
      return null; // Password is valid
    }

    // Check for specific error conditions
    const errors: ValidationErrors = {};

    if (password.length < 8) {
      errors["length"] = 'Password must be at least 8 characters long.';
    }

    if (!/[a-z]/.test(password)) {
      errors["lowercase"] = 'Password must contain at least one lowercase letter.';
    }

    if (!/[A-Z]/.test(password)) {
      errors["uppercase"] = 'Password must contain at least one uppercase letter.';
    }

    if (!/\d/.test(password)) {
      errors["digit"] = 'Password must contain at least one digit.';
    }

    if (!/[@$!%*?&]/.test(password)) {
      errors["specialCharacter"] = 'Password must contain at least one special character (@, $, !, %, *, ?, or &).';
    }
    return errors;
    
  }
}