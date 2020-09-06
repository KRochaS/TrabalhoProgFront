import { Component, OnInit, OnChanges } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { Usuarios } from '../models/usuarios';
import { UsuariosService } from '../services/usuarios.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {
    public user: any = 'Login/Cadastre-se';
    public userAutenticado = null;
  

    constructor (
        private router: Router,
        private toasterService: ToasterService) {
    }
    ngOnInit() {

        const userAutenticado = localStorage.getItem('userAutenticado');

        this.userAutenticado = JSON.parse(userAutenticado);

        if(this.userAutenticado !== null) {
            this.user = this.userAutenticado.nome;
        } else {
            this.user = 'Login/Cadastre-se'
        }
        
       

    }

    ngOnChanges() {
        console.log(this.userAutenticado);
    }

    toConta() {
        if(this.userAutenticado) {
            this.router.navigateByUrl('/conta');

        } else {
            this.router.navigateByUrl('/login');
        }
    }

    logout() {

        localStorage.removeItem('userAutenticado');
        this.toasterService.pop('success', 'Você foi deslogado com sucesso');
        this.user = 'Login/Cadastre-se';
        this.router.navigateByUrl('/');
        
    }
}



