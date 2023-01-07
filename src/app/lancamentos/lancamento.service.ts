import { firstValueFrom } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { Injectable } from '@angular/core';

export interface LancamentoFiltro{
  descricao: string;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentoUrl = 'http://localhost:8080/lancamento'

  constructor(private http: HttpClient) { }

  pesquisar(filtro: LancamentoFiltro): Promise<any>{
    const headers = new HttpHeaders()
    headers.append('Authorization', 'YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

    let params = new HttpParams();
    if(filtro.descricao){
      params = params.set('descricao', filtro.descricao)
    }

    return firstValueFrom(
      this.http.get(`${this.lancamentoUrl}?resumo`, { headers, params }))
    .then((response: any) => response['content'] )}

}
