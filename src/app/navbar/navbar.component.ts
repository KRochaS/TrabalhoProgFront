import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    public user: any = { name: 'Login/Cadastre-se' };
  

    constructor (
        private router: Router,
        private toasterService: ToasterService) {
       
    }
    ngOnInit() {

       

    }

    logout() {
        
    }
}



