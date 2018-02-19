import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../restaurante/restaurante.service';
import { Restaurantes } from '../restaurante/food/restaurantes.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurante-detalhe',
  templateUrl: './restaurante-detalhe.component.html'
})
export class RestauranteDetalheComponent implements OnInit {
  restaurante: Restaurantes;

  constructor(private restauranteServico: RestauranteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteServico.restauranteByID(this.route.snapshot.params['id'])
    .subscribe(restauranteId => this.restaurante = restauranteId);
  }

}
