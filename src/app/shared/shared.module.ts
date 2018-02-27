import { NgModule, ModuleWithProviders } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InputComponent } from "./input/input.component";
import { RadioComponent } from "./radio/radio.component";
import { RatingComponent } from "./rating/rating.component";
import { RestauranteService } from '../restaurante/restaurante.service';
import { CarrinhoServico } from '../restaurante-detalhe/carrinho/carrinho.service';
import { OrderService } from 'app/order/orderService';

@NgModule({
  declarations: [InputComponent, RadioComponent, RatingComponent],
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  exports: [
    InputComponent,
    RadioComponent,
    RatingComponent,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders{
    return {
      ngModule: SharedModule,
      providers: [RestauranteService, CarrinhoServico, OrderService]
    }
  }
}
