import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { OrderItemComponent } from "./order-item/order-item.component";
import { DeliveryCostComponent } from "./delivery-cost/delivery-cost.component";
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from "@angular/router";

const ROUTES: Routes = [
    {path: '', component: OrderComponent},
];

@NgModule({
  declarations: [
    OrderComponent,
    OrderItemComponent,
    DeliveryCostComponent
  ],
  imports: [SharedModule, RouterModule.forChild(ROUTES)]
})
export class OrderModule {}
