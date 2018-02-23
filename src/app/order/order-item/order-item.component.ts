import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { CarrinhoItem } from "../../restaurante-detalhe/carrinho/carrinho.model";

@Component({
  selector: "mt-order-item",
  templateUrl: "./order-item.component.html"
})
export class OrderItemComponent implements OnInit {
  @Input() ordemItem: CarrinhoItem[];
  @Output() increaseQty = new EventEmitter<CarrinhoItem>();
  @Output() decreaseQty = new EventEmitter<CarrinhoItem>();
  @Output() remove = new EventEmitter<CarrinhoItem>();

  constructor() {}

  ngOnInit() {
    
  }
  emitIncreaseQty(item: CarrinhoItem) {
    this.increaseQty.emit(item);
  }

  emitDecreaseQty(item: CarrinhoItem) {
    this.decreaseQty.emit(item);
  }

  emitRemove(item: CarrinhoItem) {
    this.remove.emit(item);
  }
}
