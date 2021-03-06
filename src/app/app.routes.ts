import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RestauranteComponent } from './restaurante/restaurante.component';
import { RestauranteDetalheComponent } from './restaurante-detalhe/restaurante-detalhe.component';
import { ReviewsComponent } from 'app/restaurante-detalhe/reviews/reviews.component';
import { MenuComponent } from 'app/restaurante-detalhe/menu/menu.component';
import { OrderSumayComponent } from 'app/order-sumay/order-sumay.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', loadChildren: './about/about.module#AboutModule'},
    {path: 'restaurante', component: RestauranteComponent},
    {path: 'restaurante/:id', component: RestauranteDetalheComponent,
    children: [
        {path: '', redirectTo: 'menu', pathMatch : 'full'},
        {path: 'menu', component: MenuComponent},
        {path: 'reviews', component: ReviewsComponent}
    ]},
    {path: 'order', loadChildren: './order/order.module#OrderModule'},
    {path: 'order-sumary', component: OrderSumayComponent}
];