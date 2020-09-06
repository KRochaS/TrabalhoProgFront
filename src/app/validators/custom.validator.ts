import { AbstractControl, Validators, FormControl } from '@angular/forms';

export class CustomValidator {
    constructor() { }

    static EmailValidator(control: FormControl) {

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(control.value)) {
            return { 'E-mail inválido': true };
        }

        return null;
    }

    static MinLengthValidator(control: FormControl) {

        if(control.value.length < 5) {
            return { 'Não é permitido menos de 5 caracteres': true};
        }

        return null;
    }

    static MaxLengthValidator(control: FormControl) {

        if(control.value.length > 20) {
            return { 'Não é permitido mais de 20 caracteres': true};
        }

        return null;

    }
}