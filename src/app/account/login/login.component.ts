import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {ToasterService} from 'angular2-toaster';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public form: FormGroup;
  loading = false;

  constructor(private formBuilder: FormBuilder,
    private toasterService: ToasterService,
    private router: Router) {

      this.form = this.formBuilder.group({
        email: ['', Validators.required],
        senha: ['', Validators.required]
      })

    }


  ngOnInit() {
  }

  submit() {

  }

}
