import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class = "jumbotron">
      <h2>Hunter's Brewery!!!!</h2> <small>and jordan is here too i guess...</small>
    </div>
    <div>
      <ul>
        <li *ngFor="let currentKeg of kegs">Beer: {{currentKeg.name}} <span [class] = "checkIfEmpty(currentKeg)">Pints Left:{{currentKeg.pintsLeft}} </span>
        <button (click)="editKeg(currentKeg)">Edit Keg</button>
        <button (click)="servePint(currentKeg)">Serve Pint</button></li>
      </ul>
    </div>
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

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Pabs', 'brand1', 4.00, '4.8%'),
    new Keg('Nud ', 'brand2', 6.50, '6.8%'),
    new Keg('Yucky', 'brand3', 6.00, '8.8%')
  ];

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



export class Keg {
  public showBrew: boolean = false;
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string){ }

}
