import { LancamentoDTO } from './../../dtos/lancamentoDTO/lancamentoDTO';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LancamentoFiltro, LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit  {

 totalRegistros = 0;
 filtro = new LancamentoFiltro();

  lancamentos: LancamentoDTO[] = [];

  constructor(private lancamentoServices: LancamentoService) { }

  ngOnInit() {
    this.pesquisar()

  }
  pesquisar(pagina = 0){

    this.filtro.pagina = pagina;

    this.lancamentoServices.pesquisar(this.filtro)
    .then(resultado => {
            console.log(JSON.stringify(resultado, null, 2)); // 👈 aqui você vê o JSON real da API
      this.totalRegistros = resultado.total,
            this.lancamentos = resultado.lancamentos;

    });

  }

  aoMudarPagina(event: LazyLoadEvent){
    const pagina = (event.first ?? 0) / (event.rows ?? 0) ;
    console.log('Paginas ', pagina);
    this.pesquisar(pagina);
  }

}
