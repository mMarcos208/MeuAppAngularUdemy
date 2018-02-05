import { Component, OnInit } from '@angular/core';

import { Restaurantes } from './food/restaurantes.model';
import { RestauranteService } from './restaurante.service';

@Component({
  selector: 'mt-restaurante',
  templateUrl: './restaurante.component.html'
})
export class RestauranteComponent implements OnInit {

  restaurante: Restaurantes [];

  constructor(private restauranteServico: RestauranteService) { }

  ngOnInit() {
    this.restauranteServico.restaurante().
    subscribe(restaurants => this.restaurante = restaurants);
  }

}
