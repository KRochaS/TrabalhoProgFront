import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { CustomValidator } from 'src/app/validators/custom.validator';


@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {
   
    public form: FormGroup;
    loading = false;

    constructor(private formBuilder: FormBuilder,
        private toasterService: ToasterService,
        private router: Router) {

        this.form = this.formBuilder.group({
            nome: ['', Validators.compose([
                Validators.required,
                CustomValidator.MinLengthValidator,
                CustomValidator.MaxLengthValidator
            ])],
            email: ['', Validators.compose([
                Validators.required,
                CustomValidator.EmailValidator,
                CustomValidator.MinLengthValidator,
            ])],
            senha: ['', Validators.compose([
                Validators.required,
                CustomValidator.MinLengthValidator,
                CustomValidator.MaxLengthValidator
            ])],
        })
    }
    ngOnInit() {

    }

    submit() {
        
    }
}
