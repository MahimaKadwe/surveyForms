import { CdkDragDrop,copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormBuilder, Validator, Form, Validators } from '@angular/forms';
import { ITask } from 'src/app/model/task';
import axios from 'axios';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})

export class EduComponent implements OnInit {

  // name = 'Dynamic Add Fields';
  // values = ['q1','q2','q3'];
  // ngOnInit() {

  // }

  // removevalue(i:any){
  //   this.values.splice(i,1);
  // }

  // addvalue(val:any){
  //   this.values.push(val);
  // }
  title: any;
  description: any;

  // name:['textfield', 'mcq', 'singlechoice'];
    todoForm !: FormGroup;
    tasks : ITask [] = [];
    inprogress : ITask [] = []; 
    // done : ITask [] = [];
    updateIndex: any;
    isEditEnabled : boolean = false; 
    constructor(private fb : FormBuilder) { }
  
    ngOnInit(): void {
      this.todoForm = this.fb.group({
        item : ['', Validators.required]
      })  
    }

  addTask(){
    this.tasks.push({
      description:this.todoForm.value.item, 
      done:false
    } );
    this.todoForm.reset();
  }
  updateTask(){
    this.tasks[this.updateIndex].description = this.todoForm.value.item;
    this.tasks[this.updateIndex].done = false;
    this.todoForm.reset();
    this.updateIndex = undefined;
    this.isEditEnabled = false;
    }
  onEdit(item:ITask, i : number){
this.todoForm.controls['item'].setValue(item.description);
this.updateIndex = i;
this.isEditEnabled = true;
  }

  // deleteTask(i: number){
  // this.tasks.splice(i, 1)
  // }

  // drop(event: CdkDragDrop<ITask[]>) {
  //   if (event.previousContainer === event.container) {
  //     moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
  //   } else {
  //     transferArrayItem(
  //       event.previousContainer.data,
  //       event.container.data,
  //       event.previousIndex,
  //       event.currentIndex,
  //     );
  //   }
  // }

  displayName = false;


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
}
  
  










