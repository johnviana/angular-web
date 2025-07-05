import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { firstValueFrom } from "rxjs";
import { Categoria } from "../lancamentos/lancamento-cadastro/lancamento-cadastro.component";
import { CategoriaDTO } from "../dtos/categoriaDTO/categoriaDTO";

@Injectable()
export class CategoriaService{

   lancamentoUrl = 'http://localhost:8080/categorias'

    constructor(private http: HttpClient) { }



    listarTodas(): Promise<CategoriaDTO[]> {
  const headers = new HttpHeaders()
    .append('Authorization', 'YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');

  const params = new HttpParams();

  return firstValueFrom(
    this.http.get<CategoriaDTO[]>(this.lancamentoUrl, { headers, params })
  ).then(response => {
    return response;
  });
}
}


