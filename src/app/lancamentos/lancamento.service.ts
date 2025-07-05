import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { LancamentoDTO } from '../dtos/lancamentoDTO/lancamentoDTO';

export class LancamentoFiltro{
  descricao?: string;
  dataVencimentoInicio?: Date | null;
  dataVencimentoFim?: Date | null;
  pagina = 0;
  intensPorPagina = 15;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8080/lancamentos'

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any>{
    const headers = new HttpHeaders()
    let params = new HttpParams();
    headers.append('Authorization', 'YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')


    params = params.set('page', filtro.pagina);
    params = params.set('size', filtro.intensPorPagina);


    if(filtro.descricao){
      params = params.set('descricao', filtro.descricao)
    }

    if(filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio ).format('YYYY-MM-DD'));
    }

    if(filtro.dataVencimentoFim){
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'))
    }



    return firstValueFrom(
    this.http.get<{ content: LancamentoDTO[], totalElements: number }>(this.lancamentoUrl, { headers, params })
  ).then(response => {

    const responseJson = response;
    const lancamentos = responseJson.content;

    const resultado = {

          lancamentos: lancamentos,
          total: responseJson.totalElements
    };
    return resultado;

  }

  );}
}
