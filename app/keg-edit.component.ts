import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-edit',
  template: `
  <div *ngIf="selectedKeg">
    <h3>Edit Keg</h3>
    <label for="name">Edit Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <label for="brand">Edit Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label for="alcoholContent">Edit AC:</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">>
    <label for="beerPrice">Edit price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <button (click)="finishedEditing()">ED-IT!</button>
  </div>
  `
})

export class KegEditComponent{

}
