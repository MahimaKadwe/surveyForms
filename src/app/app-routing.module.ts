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
import { FormComponent } from './components/form/form.component';
import { CstComponent } from './components/cst/cst.component';

const routes: Routes = [
 
  
  {path: 'server', component: ServerComponent},
  {path: '', redirectTo:'signup', pathMatch: 'full'},
  {path: 'signup', component: SignupComponent},
  {path: '', redirectTo:'edu', pathMatch: 'full'},
  {path: 'edu', component: EduComponent},
  {path: '', redirectTo:'form', pathMatch: 'full'},
  {path: 'form', component: FormComponent},
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

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
