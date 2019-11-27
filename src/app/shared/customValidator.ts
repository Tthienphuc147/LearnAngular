import { AbstractControl, ValidationErrors } from '@angular/forms';

export default class CustomValidator {
  static sdt(control: AbstractControl): ValidationErrors | null {

    return ( control.value.length >=10  || (control.value === '' || control.value === null)) ? null:{
      sdt: {
        valid: false
      }
    };
  }
  static password(control: AbstractControl): ValidationErrors | null {

    return ( control.value.length >=6  || (control.value === '' || control.value === null)) ? null:{
      password: {
        valid: false
      }
    };
  }
  static patternPhone(control: AbstractControl): ValidationErrors | null {
    const PHONE_REGEX = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    return (PHONE_REGEX.test(control.value) || (control.value === '' || control.value === null)) ? null:{
      patternPhone: {
        valid: false
      }
    };
  }
}
