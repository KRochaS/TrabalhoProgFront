import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { UsuariosService } from '../services/usuarios.service';
import { ApoiadoresService } from '../services/apoiadores.service';
import { Usuarios } from '../models/usuarios';
import { Apoiadores } from '../models/apoiadores';

@Component({
    selector: 'app-apoie',
    templateUrl: './apoie.component.html',
    styleUrls: ['./apoie.component.css']
})
export class ApoieComponent implements OnInit {
    loading = false;
   
    apoiadoresTotal = 0;
    width = '';
    public userAutenticado: Usuarios;
    public apoiadores: Apoiadores[];
  


    constructor(
        private toasterService: ToasterService,
        private router: Router,
        private usuarioService: UsuariosService,
        private apoiadoresService: ApoiadoresService) { }

    ngOnInit() {

        this.width = '0px';

        this.buscaApoiadores();
       
    }

    buscaApoiadores() {
        this.apoiadoresService.getApoiadores().subscribe((apoiadores: Apoiadores[]) => {
            this.apoiadores = apoiadores;
            this.apoiadoresTotal = this.apoiadores.length;
            this.width = this.apoiadoresTotal + '%';

        })
    }

    
    apoie() {
    
      const userAutenticado = localStorage.getItem('userAutenticado');

      this.userAutenticado = JSON.parse(userAutenticado);

     console.log(this.userAutenticado);

     if(this.userAutenticado === null) {
        this.toasterService.pop('warning', 'É necessário registrar-se para apoiar');
        this.router.navigateByUrl('/login');
     } else {
         
        const apoiadores =  this.apoiadores ? this.apoiadores.find(apoiador => this.userAutenticado.email === apoiador.email) : null;

        console.log(apoiadores);

        if(apoiadores) {
            this.toasterService.pop('warning', 'Você já apoiou esta causa');

        } else {
            let body = {
                id: null,
                email: this.userAutenticado.email
            }
            this.apoiadoresService.saveApoiadores(body).subscribe((resp) => {
                this.toasterService.pop('success', 'Agradecemos seu apoio nesta causa');
                this.buscaApoiadores();
            })
        }

     }
    }

}
