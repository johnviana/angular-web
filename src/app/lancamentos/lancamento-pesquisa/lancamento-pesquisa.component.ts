import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LancamentoService } from './../lancamento.service';
import { Component, OnInit } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-lancamento-pesquisa',
  templateUrl: './lancamento-pesquisa.component.html',
  styleUrls: ['./lancamento-pesquisa.component.css']
})
export class LancamentoPesquisaComponent implements OnInit  {

  descricao: string = '';
  lancamentos= []

  constructor(private lancamentoServices: LancamentoService) { }

  ngOnInit() {
    this.pesquisar()

  }
  pesquisar(){
    this.lancamentoServices.pesquisar({descricao: this.descricao})
    .then(lancamentos => this.lancamentos = lancamentos)

  }


}
