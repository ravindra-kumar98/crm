import { AbstractControl, ValidationErrors } from "@angular/forms";

export function compareValidator(controlNameToCompare: string) {
    return (control: AbstractControl): ValidationErrors | null => {
      const controlToCompare = control.root.get(controlNameToCompare);
      if (controlToCompare && controlToCompare.value !== control.value) {
        return { compare: true };
      }
      return null;
    };
}