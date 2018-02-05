import { Restaurantes } from './food/restaurantes.model';
import { Http } from '@angular/http';
import {Injectable} from '@angular/core';
import { MEAT_API } from '../app.api';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {ErroHandler} from '../app.error-handler';

@Injectable()
export class RestauranteService {

    constructor(private http: Http){
    }
    restaurante (): Observable<Restaurantes[]>  {
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErroHandler.handleErro)
    }
}