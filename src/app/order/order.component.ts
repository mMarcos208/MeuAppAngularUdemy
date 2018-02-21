import { Component, OnInit } from "@angular/core";
import { RadioOptions } from "../shared/radio/radio.model";
import { OrderService } from "./orderService";
import { CarrinhoItem } from "app/restaurante-detalhe/carrinho/carrinho.model";
import { Order, OrdemItem } from "./order.model";

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


  constructor(private orderService: OrderService) {}

  
  ngOnInit() {}

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

}
