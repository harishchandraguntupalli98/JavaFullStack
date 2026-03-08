import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
@Component({
  selector: 'app-todo-add',
  imports: [],
  templateUrl: './todo-add.html',
  styleUrl: './todo-add.css',
})
export class TodoAddComponent implements OnInit {
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {}
  addNewTodo(todoText: string) {
    this.todoService.addNewTodo({ id: 3, value: todoText });
  }
}
