import { PeriodicElement } from '../task/task';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintable',
  templateUrl: './maintable.component.html',
  styleUrls: ['./maintable.component.css']
})
export class MaintableComponent implements OnInit {
  constructor( private store: AngularFirestore) {}
  displayedColumns: string[] = [ 'name', 'content','button'];
  dataSource =  this.store.collection('todo').valueChanges({ name: 'ssss ' }) as Observable<PeriodicElement[]>;


  ngOnInit(): void {
  }

}
