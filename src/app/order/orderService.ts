import { Injectable } from "@angular/core";
import { CarrinhoServico } from "../restaurante-detalhe/carrinho/carrinho.service";
import { CarrinhoItem } from "../restaurante-detalhe/carrinho/carrinho.model";

@Injectable()
export class OrderService {
  constructor(private cartService: CarrinhoServico) {}
  
  CarrinhoItems(): CarrinhoItem[]{
    return this.cartService.items;
  }

  increaseQty(item: CarrinhoItem){
    this.cartService.increaseQty(item)
  }

  decreaseQty(item: CarrinhoItem){
    this.cartService.decreaseQty(item)
  }

  remove(item: CarrinhoItem){
    this.cartService.removeItem(item)
  }
}
