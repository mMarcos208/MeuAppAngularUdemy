import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators, AbstractControl } from "@angular/forms";
import { RadioOptions } from "../shared/radio/radio.model";
import { OrderService } from "./orderService";
import { CarrinhoItem } from "app/restaurante-detalhe/carrinho/carrinho.model";
import { Order, OrdemItem } from "./order.model";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: "mt-order",
  templateUrl: "./order.component.html"
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;

  numberPatern = /^[0-9]*$/;
  
  payment: RadioOptions[] = [
    { label: "Dinheiro", value: "MON" },
    { label: "Cartão de Débito", value: "DEB" },
    { label: "Cartão Refeição", value: "REF" }
  ];

  delivery: number = 8;

  constructor(
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: this.formBuilder.control('', [Validators.required, Validators.minLength(5)] ),
      email: this.formBuilder.control('',[Validators.required, Validators.email]),
      confirmEmail: this.formBuilder.control('',[Validators.required, Validators.email]),
      adress: this.formBuilder.control('',[Validators.required]),
      number: this.formBuilder.control('',[Validators.required, Validators.pattern(this.numberPatern)]),
      optional: this.formBuilder.control(''),
      paymentOption: this.formBuilder.control('',[Validators.required])
    }, {validator: OrderComponent.EqualsTo});
  }

  static EqualsTo(group: AbstractControl): {[key:string]: boolean}{
    const email = group.get('email');
    const confirmEmail = group.get('confirmEmail');
    if(!email || !confirmEmail){
      return undefined;
    }
    if(email.value !== confirmEmail.value){
      return {emailNotMatch:true};
    }
    return undefined;
  }
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
      this.router.navigate(["/order-sumary"]);
      this.orderService.clear();
    });
  }
}
