import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class = "jumbotron">
      <h2>Hunter's Brewery!!!!</h2> <small>and jordan is here too i guess...</small>
    </div>
    <div>
      <ul>
        <li *ngFor="let currentKeg of kegs"> {{currentKeg.name}}<button (click)="viewKeg()">View Keg</button><button (click)="editKeg()">Edit Keg</button><button (click)="servePint()">Serve Pint</button></li>
      </ul>
    </div>
  `
})

export class AppComponent {
  kegs: Keg[] = [
    new Keg('Pabs', 'brand1', 4.00, '4.8%'),
    new Keg('Nud ', 'brand2', 6.50, '6.8%'),
    new Keg('Yucky', 'brand3', 6.00, '8.8%')
  ];

  editKeg(){
    alert("EDITED!");
  }

  viewKeg(){
    alert("VIEWED!");
  }

}



export class Keg {
  public showBrew: boolean = false;
  public pintsLeft: number = 124;
  constructor(public name: string, public brand: string, public price: number, public alcoholContent: string){ }

  servePint(){
    this.pintsLeft = this.pintsLeft -1;
    console.log(this.pintsLeft);
  }
}
