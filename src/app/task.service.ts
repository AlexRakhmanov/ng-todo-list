import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from './Task';
import { TASKS } from './mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    return of(TASKS);
  }

  addTask(taskName: string): void {
    let newTask: Task;
    if (TASKS.length) {
      newTask = { id: TASKS[TASKS.length-1].id + 1, task: taskName };
    } else {
      newTask = { id: 1, task: taskName };
    }    

    TASKS.push(newTask);
  }

  deleteTask(id: number): void {
    for(let i: number = 0; i < TASKS.length; i++){ 
      if ( TASKS[i].id === id) {
        TASKS.splice(i, 1); 
        break;
      }
    }
  }
}
