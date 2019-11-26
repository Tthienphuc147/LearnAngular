import { FormGroup } from '@angular/forms';


export default class ValidatorHelper {
  private static validationMessages = {
   
    email: 'Email không đúng định dạng',
    website: 'Website không đúng định dạng',
    sdt: 'Số điện thoại phải có ít nhất 10 chữ số',
    password: 'Mật khẩu phải có ít nhất 6 kí tự',
    userName: 'Tên đăng nhập phải có ít nhất 6 kí tự',
    required: 'Trường này là bắt buộc nhập',

  };
  static getInvalidMessage(form: FormGroup, formErrors: object): string[] {
    if (!form) {
      return;
    }
    const errorMessages = [];
    for (const field in formErrors) {
      formErrors[field] = '';
      const control = form.get(field);
      if (control && !control.valid) {
        // tslint:disable-next-line: forin
        for (const key in control.errors) {
          formErrors[field] += this.validationMessages[key] + '';
          break;
        }
      }
    }
    for (const key in formErrors ) {
      if (formErrors.hasOwnProperty(key) && formErrors[key].lenghth > 0) {
        errorMessages.push(formErrors[key]);
      }
    }
    return errorMessages;

  }
  static validateForm(form: FormGroup, formErrors: object): boolean {
    return true;
  }
}
