import { Component, OnInit, Output, Input, EventEmitter} from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
  <div>
  <input type="checkbox" (click)="completeItem()">
    <span class="todo-title" [ngClass]="{'todo-complete': isComplete}">
      {{ todoItem.title }}
    </span>
    <button (click)="removeItem()">remove</button>
    </div>
    `,
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  isComplete = false;
  constructor() { }

  @Input() todoItem: any;
  @Output() remove: EventEmitter<any> = new EventEmitter();

  ngOnInit() {
    
  }

  removeItem() {
    this.remove.emit(this.todoItem)
  }

  completeItem() {
    this.isComplete = !this.isComplete;
  }

}
