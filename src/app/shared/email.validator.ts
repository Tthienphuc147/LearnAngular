import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function isValidMailFormat(control: FormControl){
    let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;

    if (control.value != ""  || !EMAIL_REGEXP.test(control.value)) {
        return { "Please provide a valid email": true };
    }

    return null;
}