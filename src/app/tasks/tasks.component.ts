import { Component, OnInit } from '@angular/core';

import { TaskService } from '../task.service';
import { Task } from '../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  
  tasks: Task[];

  constructor(private TaskService: TaskService) { }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.TaskService.getTasks()
    .subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(id: number): void {
    this.TaskService.deleteTask(id);
  }
}
