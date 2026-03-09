import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-signal-assignment',
  imports: [],
  templateUrl: './signal-assignment.html',
  styleUrl: './signal-assignment.css',
})
export class SignalAssignment {

  todos: WritableSignal<any[]> = signal([
    { id: 1, value: 'Learn Angular Signals', isCompleted: false },
    { id: 2, value: 'Practice SQL Queries', isCompleted: true },
    { id: 3, value: 'Prepare for Interview', isCompleted: false }
  ]);

  nextId = 4;
  completedToDos = computed(() =>
    this.todos().filter(todo => todo.isCompleted)
  );

  remainingToDos = computed(() =>
    this.todos().filter(todo => !todo.isCompleted)
  );

  toggleTodo(id:any){
    const updateTodo = this.todos().map(todo=>{
      if(todo.id==id){
        return{...todo,isCompleted:!todo.isCompleted}
      }
      return todo;
    });
    this.todos.set(updateTodo);

  }
  deleteTodo(id:any){
    const deletedTodo = this.todos().filter(todo =>todo.id!==id);
    this.todos.set(deletedTodo);
  }

  addTodo(input :string){
    const newTodo = {
      id: this.nextId++,
      value: input,
      isCompleted: false
    };
    this.todos.set([...this.todos(), newTodo]);
  }
}
