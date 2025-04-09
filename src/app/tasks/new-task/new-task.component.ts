import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSumarry = '';
  enteredDate = '';

  constructor(private tasksService: TasksService) {}
  onClose() {
    this.cancel.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enteredTitle,
        summary: this.enteredSumarry,
        date: this.enteredDate,
      },
      this.userId
    );
    this.cancel.emit;
  }
}
