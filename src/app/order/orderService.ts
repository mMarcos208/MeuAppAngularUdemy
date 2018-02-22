import { Injectable } from "@angular/core";
import { CarrinhoServico } from "../restaurante-detalhe/carrinho/carrinho.service";
import { CarrinhoItem } from "../restaurante-detalhe/carrinho/carrinho.model";
import { Order } from "app/order/order.model";
import { Observable } from "rxjs/Observable";
import { Http, Headers, RequestOptions } from "@angular/http";
import "rxjs/add/operator/map";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService {
  constructor(private cartService: CarrinhoServico, private http: Http) {}

  CarrinhoItems(): CarrinhoItem[] {
    return this.cartService.items;
  }

  increaseQty(item: CarrinhoItem) {
    this.cartService.increaseQty(item);
  }

  decreaseQty(item: CarrinhoItem) {
    this.cartService.decreaseQty(item);
  }

  remove(item: CarrinhoItem) {
    this.cartService.removeItem(item);
  }

  itemsValue(): number {
    return this.cartService.total();
  }

  checkOrder(order: Order): Observable<Order> {
    const heards = new Headers();
    heards.append('Content-Type','application/json');

    return this.http.post(`${MEAT_API}/orders`, JSON.stringify(order),
    new RequestOptions({headers: heards}))
    .map(response => response.json());
  }
  clear(){
    this.cartService.clear();
  }
}
