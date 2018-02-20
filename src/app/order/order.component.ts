import { Component, OnInit } from '@angular/core';
import { RadioOptions } from '../shared/radio/radio.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {
  
  payment: RadioOptions[] = [
    { label: 'Dinheiro', value: 'MON' },
    { label: 'Cartão de Débito', value: 'DEB' },
    { label: 'Cartão Refeição', value: 'REF' }
  ];

  constructor() {}

  ngOnInit() {}
}
