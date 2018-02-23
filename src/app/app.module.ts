import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { RestauranteComponent } from './restaurante/restaurante.component';
import { FoodComponent } from './restaurante/food/food.component';
import { RestauranteService } from './restaurante/restaurante.service';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { CarrinhoComponent } from './restaurante-detalhe/carrinho/carrinho.component';
import { MenuItemComponent } from './restaurante-detalhe/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detalhe/reviews/reviews.component';
import { CarrinhoServico } from 'app/restaurante-detalhe/carrinho/carrinho.service';
import { OrderComponent } from './order/order.component';
import { InputComponent } from './shared/input/input.component';
import { RadioComponent } from './shared/radio/radio.component';
import { OrderItemComponent } from './order/order-item/order-item.component';
import { OrderService } from 'app/order/orderService';
import { DeliveryCostComponent } from 'app/order/delivery-cost/delivery-cost.component';
import { OrderSumayComponent } from './order-sumay/order-sumay.component';
import { RatingComponent } from './shared/rating/rating.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestauranteComponent,
    FoodComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    CarrinhoComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemComponent,
    DeliveryCostComponent,
    OrderSumayComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestauranteService, CarrinhoServico, OrderService ,
    {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
