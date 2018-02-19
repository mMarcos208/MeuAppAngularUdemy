import { Restaurantes } from './food/restaurantes.model';
import { Http, Response } from '@angular/http';
import {Injectable} from '@angular/core';
import { MEAT_API } from '../app.api';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErroHandler} from '../app.error-handler';
import { MenuItem } from '../restaurante-detalhe/menu-item/menu-item.model';


@Injectable()
export class RestauranteService {

    constructor(private http: Http){
    }
    restaurante (): Observable<Restaurantes[]>  {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErroHandler.handleErro);
    }
    restauranteByID (id: string) : Observable<Restaurantes> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(response => response.json())
        .catch(ErroHandler.handleErro);
    }
    reviwesOfRestaurante(id:string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(response => response.json())
        .catch(ErroHandler.handleErro);
    }
    menuOfRestaurantes(id: string): Observable<MenuItem> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`)
        .map(response => response.json())
        .catch(ErroHandler.handleErro);
    }
// tslint:disable-next-line:eofline
}