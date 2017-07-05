import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import { KegListComponent } from './keg-list.component';
import { KegEditComponent } from './keg-edit.component';
import { AddKegComponent } from './keg-add.component';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, KegListComponent, KegEditComponent,AddKegComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
