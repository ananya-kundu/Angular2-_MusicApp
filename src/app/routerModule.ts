import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { HomeSigninComponent } from './home-signin/home-signin.component';

// Route Configuration
export const routes: Routes = [
  { path: '', component: SignUpComponent },
  { path: 'signin', component: SignInComponent }
  // { path: 'home', component : HomeSigninComponent}
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);