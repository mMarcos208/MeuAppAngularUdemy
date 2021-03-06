import { Component, OnInit, Input, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'mt-input-container',
  templateUrl: './input.component.html'
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() erroMensage: string;
  input: any;

  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;
  constructor() { }

  ngOnInit() {
  }
  ngAfterContentInit(){
    this.input = this.model || this.control;
    if(this.input === undefined){
     throw new Error('Errro');
    }
  }

  hasSucess(): boolean {
    return this.input.valid && (this.input.dirty || this.input.touched);
  }

  hasErro(): boolean {
    return !this.input.valid && (this.input.dirty || this.input.touched);
  }

}
