import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToasterService } from 'angular2-toaster';
import { CustomValidator } from 'src/app/validators/custom.validator';

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
  }

  submit() {

  }

}
