import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-edit',
  template: `
  <div *ngIf="childSelectedKeg">
    <h3>Edit Keg</h3>
    <label for="name">Edit Name:</label>
    <input [(ngModel)]="childSelectedKeg.name" autofocus>
    <label for="brand">Edit Brand:</label>
    <input [(ngModel)]="childSelectedKeg.brand">
    <label for="alcoholContent">Edit AC:</label>
    <input [(ngModel)]="childSelectedKeg.alcoholContent">>
    <label for="beerPrice">Edit price:</label>
    <input [(ngModel)]="childSelectedKeg.price">
    <button (click)="clickedFinishedEditing()">ED-IT!</button>
  </div>
  `
})

export class KegEditComponent{
  @Input() childSelectedKeg: Keg;
  @Output() clickDoneEditing = new EventEmitter();

  clickedFinishedEditing(){
   this.clickDoneEditing.emit();
 }

}
