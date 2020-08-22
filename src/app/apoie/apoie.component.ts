import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';

@Component({
    selector: 'app-apoie',
    templateUrl: './apoie.component.html',
    styleUrls: ['./apoie.component.css']
})
export class ApoieComponent implements OnInit {
    loading = false;
   
    apoiadoresTotal = 0;
    width = '';
  


    constructor(
        private toasterService: ToasterService,
        private router: Router) { }

    ngOnInit() {

        this.width = '0px';
    }

    
    apoie() {
      this.apoiadoresTotal++;
      this.width = this.apoiadoresTotal + '%';
    }

}
