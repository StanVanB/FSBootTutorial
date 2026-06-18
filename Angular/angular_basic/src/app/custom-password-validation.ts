import { AbstractControl } from '@angular/forms';

export function CustomPasswordValidation(control: AbstractControl) {
    console.log('Control', control.value)
    if (control.value && control.value.toLowerCase().includes('password')) {
        return { passwordInvalid: true };
    }
    return null;
}
