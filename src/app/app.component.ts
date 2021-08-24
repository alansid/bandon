import { Component,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task, TaskDialogResult,PeriodicElement } from './task/task';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { TaskDialogData } from './task/task';
import { MatDialog } from '@angular/material/dialog';
import { AngularFirestore } from '@angular/fire/firestore';
import {Observable} from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dialog: MatDialog, private store: AngularFirestore) {}
  displayedColumns: string[] = ['position', 'name', 'content','button'];
  newTask(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '270px',
      data: {
        periodicElement: {},
      },
    });
    dialogRef
      .afterClosed()
      .subscribe((result: TaskDialogResult) => {
        
        this.store.collection('todo').add(result.periodicElement);
        
      });
  }
}
