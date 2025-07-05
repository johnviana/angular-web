import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PessoaDTO } from '../dtos/pessoaDTO/pessoaDTO';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  pessoaUrl = 'http://localhost:8080/pessoas'


  constructor(private http: HttpClient) { }


listarTodas(): Promise<PessoaDTO[]>{

  const headers = new HttpHeaders()
  .append('Authorization', 'YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==')

  const params = new HttpParams();

  return firstValueFrom(
    this.http.get<PessoaDTO[]>(
      this.pessoaUrl, { headers, params })
    ).then(response => {
        return response;
      });
}

}
