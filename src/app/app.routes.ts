import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {RestauranteComponent} from './restaurante/restaurante.component';
import {RestauranteDetalheComponent} from './restaurante-detalhe/restaurante-detalhe.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restaurante', component: RestauranteComponent},
    {path: 'restaurante/:id', component: RestauranteDetalheComponent}
];