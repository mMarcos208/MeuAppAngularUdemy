import { Component, OnInit } from '@angular/core';
import { CarrinhoServico } from './carrinho.service';

@Component({
  selector: 'mt-carrinho',
  templateUrl: './carrinho.component.html'
})
export class CarrinhoComponent implements OnInit {

  constructor(private carrinhoServico: CarrinhoServico) { }

  ngOnInit() {
  }

  items (): any []{
    return this.carrinhoServico.items;
  }

  clear() {
    this.carrinhoServico.clear();
  }

  total (): number{
    return this.carrinhoServico.total();
  }

  removeItem (item: any){
    this.carrinhoServico.removeItem(item);
  }

  addItem(item: any){
    this.carrinhoServico.addItem(item);
  }

}
