import { AbstractControl } from '@angular/forms';

export function CustomPasswordValidation(control: AbstractControl) {
    if (control.value && control.value.toLowerCase().includes('password')) {
        return { passwordInvalid: true };
    }
    return null;
}
