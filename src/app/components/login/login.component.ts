
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
//import {AuthServiceService} from '../../auth-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  type: string="password";
  isText: boolean=false;
  eyeIcon: string="fa-eye-slash"
  email : any;
  password :any;
  message: boolean=false;
  // formGroup: FormGroup;
  constructor(){ }
  ngOnInit() {
    //this.initForm();
    
  }
  hideShowPass(){
    this.isText = !this.isText;
    this.isText? this.eyeIcon="fa-eye": this.eyeIcon="fa-eye-slash";
    this.isText ? this.type = "text" : this.type="password";

  }
//    handleSubmit(event: Event){
//     event.preventDefault();
//     console.log(event);
//     const userInput={
//           email: this.email,
//           password: this.password
//        }
//     if (this.email === '' || this.password === '') {
//         setError(true);
//     } else {
//         setError(false);
//         axios.post("http://localhost:5000/users/signin", userInput)
//         .then(function (res) {
//             console.log(res);
//             if(res.request.status === 200){
//               alert("successfully logged in")
//             }else{
//                 alert("Username/Password is incorrect.")
//             };
//         });
//     }
// };
// // Showing error message if error is true

 
    
  handleSubmit1 (event: Event){
    //alert("hi")
     event.preventDefault();
   //get user inputs
   //event.target.password
    const userInput={
       email: this.email,
       password: this.password
     }
     this.message=false;
  
    console.log("userInput", userInput)
   //api call
   const apiRes=axios.post("http://localhost:5000/users/signin", userInput).then(response=>{
    alert(response.data.message)
    if(response.data.message=="Invalid Credentials"){
    this.message=false;
    }else{this.message=true;}
    
   })

  //  console.log('Is Login Success: ' + userInput);
     this.email="";
    this.password="";
  //this.message=true;
    // const temp={
    //  username:e.target.username.value,
    //  password:e.target.password.value
    // }
 
    
   }

  
  removeMessage(){
    this.message=false;
   }

}

//   initForm(){
//     this.formGroup = new FormGroup({
//       email : new FormGroup("", [Validators.required]),
//       password:new FormGroup("", [Validators.required])
//     })
//   }
//   loginProcess(){
//     if(this.formGroup.valid){
//       this.authService.login(this.formGroup.value).subscribe(result=>{
//         if(result.success){
//           console.log(result)
//           alert(result.message);
//         }else{
//           alert(result.message)
//         }
//       })
//       this.message=true;
//     this.email.reset({})
//     this.password.reset({})
//   }
// }