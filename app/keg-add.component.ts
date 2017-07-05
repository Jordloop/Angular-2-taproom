import { Component, Output, EventEmitter } from '@angular/core';
import { Keg } from "./keg.model";

@Component({
  selector: 'keg-add',
  template: `
    <form kegForm="ngmodel">
      <label for="name">Enter Name:</label>
      <input type="text" id = "beerName" name="name"required>
      <label for="brand">Enter Brand:</label>
      <input type="text" id = "brandName" name="brand" required>
      <label for="alcoholContent">Enter AC:</label>
      <input type="number" id = "alcoholContent" name = "alcoholContent" required>
      <label for="beerPrice">Enter price:</label>
      <input type="number" id = "price" name = "brewPrice" required>
      <button type="submit" name="button"></button>
    </form>
  `
})

export class AddKegComponent {

}
