import { Component, OnInit, Input } from '@angular/core';
import { Restaurantes } from './restaurantes.model';


@Component({
  selector: 'mt-food',
  templateUrl: './food.component.html'
})
export class FoodComponent implements OnInit {

  @Input() food: Restaurantes 
  constructor() { }

  ngOnInit() {
  }

}
