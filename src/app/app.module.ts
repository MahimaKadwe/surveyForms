import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; 
import {DragDropModule} from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { SignupComponent } from './components/signup/signup.component';
import { EduComponent } from './components/edu/edu.component';
import { TechComponent } from './components/tech/tech.component';
import { HltComponent } from './components/hlt/hlt.component';
import { EmpComponent } from './components/emp/emp.component';
import { OthComponent } from './components/oth/oth.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatCheckboxModule} from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field'
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatRadioModule} from '@angular/material/radio';
import { InputComponent } from './components/input/input.component';
import { RadioComponent } from './components/radio/radio.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { CstComponent } from './components/cst/cst.component';
import { ConcludeComponent } from './components/conclude/conclude.component';
import { TextFieldComponent } from './text-field/text-field.component';
import { ResponseComponent } from './components/response/response.component';
import { SettingComponent } from './components/setting/setting.component';
import { LoginComponent } from './components/login/login.component';
import { SigninComponent } from './components/signin/signin.component';
import { HomeComponent } from './components/home/home.component';
// import {AuthServiceService} from '../../auth-service.service';
import  {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    SignupComponent,
    EduComponent,
    TechComponent,
    HltComponent,
    EmpComponent,
    OthComponent,
    TextboxComponent,
    InputComponent,
    RadioComponent,
    CheckboxComponent,
    CstComponent,
    ConcludeComponent,
    TextFieldComponent,
    ResponseComponent,
    SettingComponent,
    LoginComponent,
    SigninComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule, 
    MatRadioModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
