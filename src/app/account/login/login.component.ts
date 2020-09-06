import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { CustomValidator } from 'src/app/validators/custom.validator';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Usuarios } from 'src/app/models/usuarios';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    public form: FormGroup;
    loading = false;
    public usuarios: Usuarios[];
    public userAutenticado;

    constructor(private formBuilder: FormBuilder,
        private toasterService: ToasterService,
        private router: Router,
        private usuarioService: UsuariosService) {

        this.form = this.formBuilder.group({
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

        this.getUsers();

    }

    getUsers() {
        this.usuarioService.getUsers().subscribe((users: Usuarios[]) => {
            this.usuarios = users;
        });
    }

    submit() {
        let email = this.form.get('email').value;
        let senha = this.form.get('senha').value;

        const userAuth = this.usuarios.find(user => email === user.email && senha === user.senha);

        console.log(userAuth);

        if (userAuth) {
            this.userAutenticado = JSON.stringify(userAuth);
            localStorage.setItem('userAutenticado', this.userAutenticado);
            this.toasterService.pop('success', 'Bem-vindo(a) sua autentificação foi realizada com sucesso!');
            this.router.navigateByUrl('/');

        } else {
            this.toasterService.pop('error', 'E-mail ou senha incorretos');
        }

    }






}
