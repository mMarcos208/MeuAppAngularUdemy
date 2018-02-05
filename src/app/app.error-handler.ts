import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

export class ErroHandler {
    static handleErro (erro: Response | any){
        let errorMessage: string;

        if(erro instanceof Response){
            errorMessage = `Erro ${erro.status} ao obter a URL ${erro.url} - ${erro.statusText}`;
        }else {
            errorMessage = erro.toString();
        }
        console.log(errorMessage);
        return Observable.throw(errorMessage);
    }
}