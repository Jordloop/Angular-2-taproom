import { Component, Input } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'keg-list',
  template: `
  <ul>
    <li *ngFor="let currentKeg of childKegs">Beer: {{currentKeg.name}} <span [class] = "checkIfEmpty(currentKeg)">Pints Left:{{currentKeg.pintsLeft}} </span>
    <button (click)="editKeg(currentKeg)">Edit Keg</button>
    <button (click)="servePint(currentKeg)">Serve Pint</button></li>
  </ul>
  `
})

export class KegListComponent {
  @Input() childKegs: Keg[];

  selectedKeg = null;

  finishedEditing() {
    this.selectedKeg = null;
  }

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }


  servePint(clickedKeg){
    clickedKeg.pintsLeft = clickedKeg.pintsLeft -1;
    console.log(clickedKeg.pintsLeft);
  }

  checkIfEmpty(clickedKeg){
    if(clickedKeg.pintsLeft <= 10){
      return "bg-danger";
    }
  }
}
