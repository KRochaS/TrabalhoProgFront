import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
    selector: 'app-conta',
    templateUrl: './conta.component.html',
    styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
    public form: FormGroup;
    loading = false;
    dataList;
    user;
    usersAutenticado;
    UserDbKey;
    toggle;
    constructor(private formBuilder: FormBuilder,
        private toasterService: ToasterService,
        private router: Router) {

        this.form = this.formBuilder.group({
            nome: ['', Validators.required],
            email: ['', Validators.required],
            senha: ['', Validators.required]
        })

    }

    ngOnInit() {

    }

    onSubmit() {
        this.loading = true;
    }

    changeType(password) {
        if (password.type == "password")
            password.type = "text";
        else
            password.type = "password";
        this.toggle = !this.toggle;

    }

    deletarConta() {
        
    }
}