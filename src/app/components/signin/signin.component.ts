
import { Component, OnInit} from '@angular/core';
import axios from 'axios';
//import axios

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  
  type: string = "password";
  isText: boolean = false;
  eyeIcon:string = "fa-eye-slash";
  lastName : any;
  firstName : any;
  username : any;
  password : any;
  email : any;

  constructor(){ }

  ngOnInit(): void {
    console.log(this.email)
    
  }

  hideShowPass(){
    this.isText = !this.isText;
    this.isText? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText ? this.type = "text" : this.type="password";

  }


  handleSubmit (event: Event){
    event.preventDefault();


    //get user inputs
    //event.target.password
    this.firstName="";
    this.lastName="";
    const userInput={
      username: this.username,
      email: this.email,
      password: this.password


    }

    

    //console.log("userInput", userInput)
    
    
    //api call
    const apiRes=axios.post("http://localhost:5000/users/signup", userInput)

    console.log(apiRes)
    this.username="";
    
    this.email="";
    this.password="";
 
    // const temp={
    //  username:e.target.username.value,
    //  password:e.target.password.value
    // }
 
    // console.log(temp)
    // return false;
   }
}
