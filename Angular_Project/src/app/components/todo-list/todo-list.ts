import { Component, inject, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo-service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.css',
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<any>;
  constructor(private todoService: TodoService) {}
  ngOnInit(): void {
    this.todos$ = this.todoService.todoObs;
  }
  deleteTodo(id: number) {
    this.todoService.deleteToDo(id);
  }
}

