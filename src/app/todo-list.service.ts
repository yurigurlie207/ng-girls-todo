import { Injectable } from '@angular/core';
import { TodoListStorageService } from './todo-list-storage.service';

@Injectable()
export class TodoListService {

  constructor(private todoListStorageService:TodoListStorageService) { }

  getTodoList() {
    return this.todoListStorageService.get();
  }

  addItem(item): any {
    return this.todoListStorageService.post(item);
  
  }

  destroy(item): any {
    return this.todoListStorageService.destroy(item);
  }

}
