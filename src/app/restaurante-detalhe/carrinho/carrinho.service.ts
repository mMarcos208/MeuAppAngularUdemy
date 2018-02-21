import { CarrinhoItem } from "./carrinho.model";
import { MenuItem } from "app/restaurante-detalhe/menu-item/menu-item.model";
export class CarrinhoServico {
  items: CarrinhoItem[] = [];
  clear() {
    this.items = [];
  }
  addItem(item: MenuItem) {
    let foundItem = this.items.find(myItem => myItem.menuItem.id === item.id);
    if (foundItem) {
      foundItem.quantidade = foundItem.quantidade + 1;
    } else {
      this.items.push(new CarrinhoItem(item));
    }
  }
  increaseQty(item: CarrinhoItem) {
    item.quantidade = item.quantidade + 1;
  }

  decreaseQty(item: CarrinhoItem) {
    item.quantidade = item.quantidade - 1;
    if (item.quantidade === 0) {
      this.removeItem(item);
    }
  }

  removeItem(item: CarrinhoItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items
      .map(item => item.value())
      .reduce((prev, value) => prev + value, 0);
  }
}
