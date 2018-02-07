import { Component, OnInit } from '@angular/core';
import {TodoListService} from './../todo-list.service';


@Component({
  selector: 'todo-list-manager',
  template: `
     <div id="title">{{title}}</div>  
      <todo-input (submit)="addItem($event)"></todo-input>
      <ul id="list">
          <li *ngFor="let item of todoList">
            <todo-item [todoItem]="item"
                      (remove)="removeItem($event)"></todo-item>
          </li>
      </ul>
      
  `,
  styleUrls: ['./list-manager.component.css']
})
export class ListManagerComponent implements OnInit {

  
  title = 'My To Do List';
  todoList: Array<any>;

  addItem(title: string): void {    
    this.todoList = this.todoListService.addItem(title);
  }

  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
    this.todoList = this.todoListService.getTodoList();
  }

  removeItem(item) {
    this.todoList = this.todoListService.destroy(item);
  }

}
