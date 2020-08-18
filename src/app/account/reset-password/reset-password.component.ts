import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'app-reset-password',
    templateUrl: './reset-password.component.html',
    styleUrls: ['./reset-password.component.css']
})

export class ResetPasswordComponent implements OnInit {

    form: FormGroup;

    constructor(
        private formBuilder: FormBuilder) {


            this.form = this.formBuilder.group({
                email: ['', Validators.required],
               
            })
        }

    ngOnInit() {
    }

    restaurarSenha() {
           
     
    }

}
