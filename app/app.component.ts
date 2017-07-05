import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class = "jumbotron">
      <h2>Hunter's Brewery!!!!</h2> <small>and jordan is here too i guess...</small>
    </div>
    <div>
      <ul>
        <li [class] = "checkIfEmpty(currentKeg)" *ngFor="let currentKeg of kegs">Beer: {{currentKeg.name}} Pints Lift: {{currentKeg.pintsLeft}}<button (click)="viewKeg(currentKeg)">View Keg</button><button (click)="editKeg(currentKeg)">Edit Keg</button><button (click)="servePint(currentKeg)">Serve Pint</button></li>
      </ul>
    </div>
    <h3>Edit Keg</h3>
    <label for="name">Edit Name:</label>
    <input [(ngModel)]="selectedKeg.name">
    <label for="brand">Edit Brand:</label>
    <input [(ngModel)]="selectedKeg.brand">
    <label for="alcoholContent">Edit AC:</label>
    <input [(ngModel)]="selectedKeg.alcoholContent">>
    <label for="beerPrice">Edit price:</label>
    <input [(ngModel)]="selectedKeg.price">
    <button type="submit" name="button">EDIT!</button>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Pabs', 'brand1', 4.00, '4.8%'),
    new Keg('Nud ', 'brand2', 6.50, '6.8%'),
    new Keg('Yucky', 'brand3', 6.00, '8.8%')
  ];
  selectedKeg: Keg = this.kegs[0];

  editKeg(clickedKeg){
    this.selectedKeg = clickedKeg;
  }

  viewKeg(clickedKeg){
    alert("VIEWED!");
  }

  servePint(clickedKeg){
    clickedKeg.pintsLeft = clickedKeg.pintsLeft -1;
    console.log(clickedKeg.pintsLeft);

  }

  checkIfEmpty(clickedKeg){
    if(clickedKeg.pintsLeft <= 10){
      return "bg-danger";
    }
    else if (clickedKeg.pintsLeft <= 50){
      return "bg-warning";
    }
    else {
      return "bg-info";
    }

  }
}



export class Keg {
  public showBrew: boolean = false;
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string){ }

}
