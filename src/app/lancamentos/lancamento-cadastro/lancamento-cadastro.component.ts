import { PessoaService } from './../../pessoas/pessoa-service.service';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/categorias/categoria.service';
import { CategoriaDTO } from 'src/app/dtos/categoriaDTO/categoriaDTO';
import { PessoaDTO } from 'src/app/dtos/pessoaDTO/pessoaDTO';
import { __values } from 'tslib';

export interface Categoria {
  codigo: number;
  nome: string;
}

@Component({
  selector: 'app-lancamento-cadastro',
  templateUrl: './lancamento-cadastro.component.html',
  styleUrls: ['./lancamento-cadastro.component.css']
})
export class LancamentoCadastroComponent implements OnInit {

tipos = [
  {label: 'Receita', value: 'RECEITA'},
  {label: 'Despesa', value: 'DESPESA'}
];

categorias: { label: string; value: number }[] = [];

pessoas: {label: string; value: number} [] = [];

  constructor(
        private categoriaService : CategoriaService,
        private pessoaService: PessoaService

  ) { }

  ngOnInit()
   {
    this.carregarCategorias(),
    this.carregarPessoas()
  }

carregarCategorias() {
    return this.categoriaService.listarTodas()
      .then((categorias: CategoriaDTO[]) => {
        console.log(JSON.stringify(categorias, null, 2));
        this.categorias = categorias.map((c: CategoriaDTO) => ({
          label: c.nome,
          value: c.codigo
        }));
      });
  }

  carregarPessoas(){
    return this.pessoaService.listarTodas()
    .then((pessoas: PessoaDTO[]) => {
      this.pessoas = pessoas.map((p: PessoaDTO) => ({
        label: p.nome,
        value: p.codigo
      }));
    })

  }
}

