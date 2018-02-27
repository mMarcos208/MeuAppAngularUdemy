import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import { RestauranteComponent } from './restaurante/restaurante.component';
import { FoodComponent } from './restaurante/food/food.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { MenuComponent } from './restaurante-detalhe/menu/menu.component';
import { CarrinhoComponent } from './restaurante-detalhe/carrinho/carrinho.component';
import { MenuItemComponent } from './restaurante-detalhe/menu-item/menu-item.component';
import { ReviewsComponent } from './restaurante-detalhe/reviews/reviews.component';
import { OrderSumayComponent } from './order-sumay/order-sumay.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    RestauranteComponent,
    FoodComponent,
    RestauranteDetalheComponent,
    MenuComponent,
    CarrinhoComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderSumayComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SharedModule.forRoot(),
    RouterModule.forRoot(ROUTES)
  ],
  providers: [{provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
