import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToasterModule } from 'angular2-toaster';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContaComponent } from './View/account/conta/conta.component';
import { LoginComponent } from './View/account/login/login.component';
import { SignupComponent } from './View/account/signup/signup.component';
import { ApoieComponent } from './View/apoie/apoie.component';
import { FramePageComponent } from './View/frame-page/frame-page.component';
import { HomeComponent } from './View/home/home.component';
import { InformacoesComponent } from './View/informacoes/informacoes.component';
import { NavbarComponent } from './View/navbar/navbar.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        LoginComponent,
        SignupComponent,
        HomeComponent,
        FramePageComponent,
        ContaComponent,
        AppComponent,
        InformacoesComponent,
        ApoieComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        ToasterModule.forRoot(),
        NoopAnimationsModule,
        HttpClientModule,
        FormsModule,
        NgxLoadingModule.forRoot({
            animationType: ngxLoadingAnimationTypes.threeBounce,
            backdropBackgroundColour: 'rgba(0,0,0,0.4)',
            backdropBorderRadius: '4px',
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        })


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
