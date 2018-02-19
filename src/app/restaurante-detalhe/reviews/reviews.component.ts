import { Component, OnInit } from '@angular/core';
import { RestauranteService } from '../../restaurante/restaurante.service';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>

  constructor(private restauranteServico: RestauranteService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.reviews = this.restauranteServico.reviwesOfRestaurante(this.route.parent.snapshot
      .params['id']);
  }

}
