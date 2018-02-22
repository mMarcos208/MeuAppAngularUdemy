import { Component, OnInit } from "@angular/core";
import { RadioOptions } from "../shared/radio/radio.model";
import { OrderService } from "./orderService";
import { CarrinhoItem } from "app/restaurante-detalhe/carrinho/carrinho.model";
import { Order, OrdemItem } from "./order.model";
import { Router } from "@angular/router";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
  payment: RadioOptions[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" }
  ];

  delivery: number = 8;

  constructor(private orderService: OrderService, private router: Router) {}

<<<<<<< HEAD
  constructor(private orderService: OrderService) { }


  ngOnInit() { }
=======
  ngOnInit() {}
>>>>>>> 52498f9beb1c8d03cfd266ccd50e307c64347d76

  cartItems(): CarrinhoItem[] {
    return this.orderService.CarrinhoItems();
  }

  increaseQty(item: CarrinhoItem) {
    this.orderService.increaseQty(item);
  }

  decreaseQty(item: CarrinhoItem) {
    this.orderService.decreaseQty(item);
  }

  remove(item: CarrinhoItem) {
    this.orderService.remove(item);
  }
  itemsValue(): number {
    return this.orderService.itemsValue();
  }

  checkOrder(order: Order) {
    order.orderItens = this.cartItems().map(
      (item: CarrinhoItem) => new OrdemItem(item.quantidade, item.menuItem.id)
    );

    this.orderService.checkOrder(order).subscribe((orderId: Order) => {
      this.router.navigate(['/order-sumary']);
      this.orderService.clear();
    });
  }
}
