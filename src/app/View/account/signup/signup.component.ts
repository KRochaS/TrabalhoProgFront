import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { UsuariosService } from 'src/app/Controller/services/usuarios.service';
import { Usuarios } from 'src/app/interfaces/usuarios';
import { CustomValidator } from 'src/app/validators/custom.validator';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],

})
export class SignupComponent implements OnInit {
   
    public form: FormGroup;
    loading = false;
    public usuarios: Usuarios[];

    constructor(private formBuilder: FormBuilder,
        private toasterService: ToasterService,
        private router: Router,
        private usuarioService: UsuariosService ) {

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

        this.getUsers();

    }
    getUsers() {
        this.usuarioService.getUsers().subscribe((users: Usuarios[]) => {
          this.usuarios = users;
        });
      }

      saveUsers(usuario) {

        const userCadastrado = this.usuarios ? this.usuarios.find(user => usuario.email === user.email) : null;

        console.log(userCadastrado);

        if(userCadastrado == null) {
            this.usuarioService.saveUsers(usuario).subscribe((users) => {
                console.log(users);
                this.toasterService.pop('success', 'Cadastro criado com sucesso!');
                this.router.navigateByUrl('/login');
            });

        } else {
            this.toasterService.pop('warning', 'Usuário já cadastrado!');
        }
      }
}
