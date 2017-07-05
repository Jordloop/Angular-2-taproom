import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  template: `
    <div class = "jumbotron">
      <h2>Hunter's Brewery!!!!</h2> <small>and jordan is here too i guess...</small>
    </div>
    <keg-list [childKegs] = "masterKegs"><keg-list>

  `
})

export class AppComponent {
  masterKegs: Keg[] = [
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

}
