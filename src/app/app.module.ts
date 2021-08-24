import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TaskComponent } from './task/task.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule,MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MaintableComponent } from './maintable/maintable.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    TaskDialogComponent,
    MaintableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  providers: [
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
