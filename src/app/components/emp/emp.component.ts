
import { CdkDragDrop,copyArrayItem, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { FormArray } from '@angular/forms';
import { FormGroup, FormBuilder, Validator, Form, Validators } from '@angular/forms';
import { ITask } from 'src/app/model/task';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})

export class EmpComponent {

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

