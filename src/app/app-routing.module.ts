import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServerComponent } from './components/server/server.component';
import { SignupComponent } from './components/signup/signup.component';
import { TechComponent } from './components/tech/tech.component';
import { EmpComponent } from './components/emp/emp.component';
import { EduComponent } from './components/edu/edu.component';
import { HltComponent } from './components/hlt/hlt.component';
import { OthComponent } from './components/oth/oth.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { CstComponent } from './components/cst/cst.component';
import { ConcludeComponent } from './components/conclude/conclude.component';
import { ResponseComponent } from './components/response/response.component';
import { SettingComponent } from './components/setting/setting.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';

const routes: Routes = [
 
  {path: 'server', component: ServerComponent},
  {path: '', redirectTo:'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo:'edu', pathMatch: 'full'},
  {path: 'edu', component: EduComponent},
  {path: '', redirectTo:'conclude', pathMatch: 'full'},
  {path: 'conclude', component: ConcludeComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'hlt', pathMatch: 'full'}, 
  {path: 'hlt', component: HltComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo: 'oth', pathMatch: 'full'},
  {path: 'oth', component: OthComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo:'emp', pathMatch: 'full'}, 
  {path: 'emp', component: EmpComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo:'cst', pathMatch: 'full'}, 
  {path: 'cst', component: CstComponent},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo:'tech', pathMatch: 'full'}, 
  {path: 'tech', component: TechComponent},
  {path: 'edu', component: EduComponent},
  {path: '', redirectTo:'response', pathMatch: 'full'},
  {path: 'response', component: ResponseComponent},
  {path: 'emp', component: EmpComponent},
  {path: '', redirectTo:'response', pathMatch: 'full'},
  {path: 'response', component: ResponseComponent},
  {path: 'oth', component: OthComponent},
  {path: '', redirectTo:'response', pathMatch: 'full'},
  {path: 'response', component: ResponseComponent},
  {path: 'cst', component: CstComponent},
  {path: '', redirectTo:'response', pathMatch: 'full'},
  {path: 'response', component: ResponseComponent},
  {path: 'hlt', component: HltComponent},
  {path: '', redirectTo:'response', pathMatch: 'full'},
  {path: 'response', component: ResponseComponent},
  {path: 'tech', component: TechComponent},
  {path: '', redirectTo:'response', pathMatch: 'full'},
  {path: 'response', component: ResponseComponent},
  {path: 'edu', component: EduComponent},
  {path: '', redirectTo:'setting', pathMatch: 'full'},
  {path: 'setting', component: SettingComponent},
  {path: 'emp', component: EmpComponent},
  {path: '', redirectTo:'setting', pathMatch: 'full'},
  {path: 'setting', component: SettingComponent},
  {path: 'oth', component: OthComponent},
  {path: '', redirectTo:'setting', pathMatch: 'full'},
  {path: 'setting', component: SettingComponent},
  {path: 'cst', component: CstComponent},
  {path: '', redirectTo:'setting', pathMatch: 'full'},
  {path: 'setting', component: SettingComponent},
  {path: 'hlt', component: HltComponent},
  {path: '', redirectTo:'setting', pathMatch: 'full'},
  {path: 'setting', component: SettingComponent},
  {path: 'tech', component: TechComponent},
  {path: '', redirectTo:'setting', pathMatch: 'full'},
  {path: 'setting', component: SettingComponent}, 
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'signin', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent}, 
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, 
  {path: 'signin', component: SigninComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent}, 
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo:'login', pathMatch: 'full'},
  {path: 'signin', component: SigninComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
