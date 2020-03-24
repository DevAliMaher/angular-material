import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { TariningComponent } from './tarining/tarining.component';
import { NewTrainingComponent } from './tarining/new-training/new-training.component';
import { CurrentTrainingComponent } from './tarining/current-training/current-training.component';
import { PastTrainingComponent } from './tarining/past-training/past-training.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'training', component: TariningComponent, children: [
    { path: 'new-exercise', component: NewTrainingComponent},
    { path: 'current-exercise', component: CurrentTrainingComponent},
    { path: 'past-exercise', component: PastTrainingComponent}

  ] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
