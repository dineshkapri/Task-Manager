import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './addTask.component.html',
  styleUrls: ['./addTask.component.scss']
})
export class addTask implements OnInit {

  displayTask = false;
  public formData = {
    task: '',
    details: ''
  }

  taskData = []

  constructor() { }
  
  ngOnInit(): void {
  }
  
  addTask(){
    this.displayTask = true;
  }

  saveData(value:any) {
    // console.log(value);
    this.taskData.push(this.formData);
    this.formData = {
      task: '',
      details: ''
    }
    console.log(this.taskData);
  }
}
