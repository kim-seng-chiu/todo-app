import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  eachToDo = {};
  todoArray = [];
  addToDo(todo,date){
    this.eachToDo["itemName"] = todo;
    this.eachToDo["date"] = date;
    this.todoArray.push(this.eachToDo);
    console.log(this.todoArray);
    this.eachToDo = [];
  }
}
