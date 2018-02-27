import { NgModule } from '@angular/core';
import { RestauranteService } from '../restaurante/restaurante.service';
import { CarrinhoServico } from 'app/restaurante-detalhe/carrinho/carrinho.service';
import { OrderService } from '../order/orderService';

@NgModule({
    providers: [RestauranteService, CarrinhoServico, OrderService]
})

export class CoreModule {}