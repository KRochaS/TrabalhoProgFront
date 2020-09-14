import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContaComponent } from './View/account/conta/conta.component';
import { LoginComponent } from './View/account/login/login.component';
import { SignupComponent } from './View/account/signup/signup.component';
import { ApoieComponent } from './View/apoie/apoie.component';
import { FramePageComponent } from './View/frame-page/frame-page.component';
import { HomeComponent } from './View/home/home.component';
import { InformacoesComponent } from './View/informacoes/informacoes.component';



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
