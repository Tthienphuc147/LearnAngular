import { AbstractControl, ValidationErrors } from "@angular/forms";

export function comparePassword(control: AbstractControl): ValidationErrors {
  if (control.parent != undefined) {
    var password: string = control.parent.get("password").value;
    var cpassword: string = control.parent.get("comparepassword").value;
    if (password !== cpassword) {
      return { matchPassword: true };
    }
  }
  return null;
}
