
import { CdkDragDrop,copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormBuilder, Validator, Form, Validators } from '@angular/forms';
import { ITask } from 'src/app/model/task';
import axios from 'axios';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})

export class EmpComponent {

  displayName = false;
  title: any;
  description: any;
  questions: any  ;

  todo = ['Input', 'Select', 'Checkbox', 'Radio', 'Textarea'];

  done = [];
  currentContainer = []

  deleteTask(i: number){
    this.currentContainer.splice(i, 1)
    } 

  drop(event: CdkDragDrop<any>) {
    this.currentContainer = event.container.data;
    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

handleEdu(event: Event){
  //alert("hi")     
  event.preventDefault(); 
  //get user inputs  
   //event.target.password   
const temp=[]
this.questions.map((q:any)=>{
  temp.push(q)
}) 
 const userInput={
   title: this.title,
  description: this.description,
  questions:this.questions,
   //JSON.parse(this.questions)    
   }
   //this.message=false;      
   console.log("userInput", userInput)
   //api call   
   const apiRes=axios.post("http://localhost:5000/users/signin", userInput)//.then(response=>{   
     //alert(response.data.message)   
      //if(response.data.message=="Invalid Credentials"){       // }        
       //  console.log('Is Login Success: ' + userInput);    
        this.title="";
        this.description="";
        this.questions = "";
       }
}

