import { Component, OnInit } from '@angular/core';
import { ToasterService } from 'angular2-toaster';
import { Router } from '@angular/router';

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
