import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task,TaskDialogData,TaskDialogResult,PeriodicElement } from '../task/task';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})

export class TaskDialogComponent  {

  private backupTask: Partial<PeriodicElement> = { ...this.data.periodicElement };

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskDialogData
  ) {}

  cancel(): void {
    this.data.periodicElement.name = this.backupTask.name;
   // this.data.periodicElement.description = this.backupTask.position;
    this.dialogRef.close(this.data);
  }
}
