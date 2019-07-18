import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent implements OnInit {
  taskName: string = '';

  constructor(private TaskService: TaskService) { }

  ngOnInit() {
  }

  addTask(taskName): void {
    this.TaskService.addTask(taskName);
  }
}
