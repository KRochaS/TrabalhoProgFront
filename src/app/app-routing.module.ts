import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FramePageComponent } from './frame-page/frame-page.component';
import { LoginComponent } from './account/login/login.component';
import { SignupComponent } from './account/signup/signup.component';
import { ContaComponent } from './account/conta/conta.component';
import { ApoieComponent } from './apoie/apoie.component';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { NavbarComponent } from './navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignupComponent },
      { path: 'conta', component: ContaComponent},
      { path: 'apoie', component: ApoieComponent},
      {path: 'informacoes', component: InformacoesComponent}
      
      
    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
