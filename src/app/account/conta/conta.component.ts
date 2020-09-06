import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
    selector: 'app-conta',
    templateUrl: './conta.component.html',
    styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {
    public form: FormGroup;
    toggle;
    public userAutenticado;
  
    constructor(private formBuilder: FormBuilder,
        private toasterService: ToasterService,
        private router: Router,
        private usuarioService: UsuariosService) {

        this.form = this.formBuilder.group({
            id: [''],
            nome: ['', Validators.required],
            email: ['', Validators.required],
            senha: ['', Validators.required]
        })

    }

    ngOnInit() {

        const userAutenticado = localStorage.getItem('userAutenticado');

        this.userAutenticado = JSON.parse(userAutenticado);

        if(this.userAutenticado) {
            this.form.setValue(this.userAutenticado);

        }


    }


    changeType(password) {
        if (password.type == "password")
            password.type = "text";
        else
            password.type = "password";
        this.toggle = !this.toggle;

    }

    deletarConta() {
        this.usuarioService.deleteUsuario(this.form.value).subscribe((resp) => {
           console.log(resp);
           this.toasterService.pop('success', 'Usuário deletado com sucesso!');
        });
        localStorage.removeItem('userAutenticado');
        this.router.navigateByUrl('/');
    }
}
