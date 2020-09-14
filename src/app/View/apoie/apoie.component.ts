import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { ApoiadoresService } from 'src/app/Controller/services/apoiadores.service';
import { Apoiadores } from 'src/app/interfaces/apoiadores';
import { Usuarios } from 'src/app/interfaces/usuarios';


@Component({
    selector: 'app-apoie',
    templateUrl: './apoie.component.html',
    styleUrls: ['./apoie.component.css']
})
export class ApoieComponent implements OnInit {
    loading = true;
   
    apoiadoresTotal = 0;
    width = '';
    public userAutenticado: Usuarios;
    public apoiadores: Apoiadores[];
  


    constructor(
        private toasterService: ToasterService,
        private router: Router,
        private apoiadoresService: ApoiadoresService) { }

    ngOnInit() {

        this.width = '0px';

        this.buscaApoiadores();
       
    }

    buscaApoiadores() {
        this.loading = true;
        this.apoiadoresService.getApoiadores().subscribe((apoiadores: Apoiadores[]) => {
            this.apoiadores = apoiadores;
            this.apoiadoresTotal = this.apoiadores.length;
            this.width = this.apoiadoresTotal + '%';
            this.loading = false;

        })
    }

    
    apoie() {
    
        this.loading = true;
      const userAutenticado = localStorage.getItem('userAutenticado');

      this.userAutenticado = JSON.parse(userAutenticado);

     console.log(this.userAutenticado);

     if(this.userAutenticado === null) {
         this.loading = false;
        this.toasterService.pop('warning', 'É necessário registrar-se para apoiar');
        this.router.navigateByUrl('/login');
     } else {
         
        const apoiadores =  this.apoiadores ? this.apoiadores.find(apoiador => this.userAutenticado.email === apoiador.email) : null;

        console.log(apoiadores);

        if(apoiadores) {
            this.loading = false;
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
