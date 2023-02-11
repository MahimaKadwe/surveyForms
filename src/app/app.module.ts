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
import { FormComponent } from './components/form/form.component';
import { CstComponent } from './components/cst/cst.component';

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
    FormComponent,
    CstComponent,
  
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
