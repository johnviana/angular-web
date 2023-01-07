import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


class Cliente{
  nome: string =''
  email: string = ''
  profissao: string ='Empresario'
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'algamoney-ui';

  cliente = new Cliente();
  profissao = ['Informatica', 'Maquina', 'carros']

  salvar(form: NgForm) {
    // this.cliente.nome = form.value.primeiroNome
    // this.cliente.email = form.value.email
    // this.cliente.profissao = form.value.profissao
    console.log(form.value);
    console.log(this.cliente)
    form.reset({ profissao: '' });

  }


  lancamentos = [
    { tipo: 'DESPESA', descricao: 'Compra de pão', dataVencimento: '10/09/2021',
      dataPagamento: null, valor: 4.55, pessoa: 'Padaria do José' },
    { tipo: 'RECEITA', descricao: 'Venda de software', dataVencimento: '10/06/2017',
      dataPagamento: '09/06/2017', valor: 80000, pessoa: 'Atacado Brasil' },
    { tipo: 'DESPESA', descricao: 'Impostos', dataVencimento: '20/07/2017',
      dataPagamento: null, valor: 14312, pessoa: 'Ministério da Fazenda' },
    { tipo: 'DESPESA', descricao: 'Mensalidade de escola', dataVencimento: '05/06/2017',
      dataPagamento: '30/05/2017', valor: 800, pessoa: 'Escola Abelha Rainha' },
    { tipo: 'RECEITA', descricao: 'Venda de carro', dataVencimento: '18/08/2017',
      dataPagamento: null, valor: 55000, pessoa: 'Sebastião Souza' },
    { tipo: 'DESPESA', descricao: 'Aluguel', dataVencimento: '10/07/2017',
      dataPagamento: '09/07/2017', valor: 1750, pessoa: 'Casa Nova Imóveis' },
    { tipo: 'DESPESA', descricao: 'Mensalidade musculação', dataVencimento: '13/07/2017',
      dataPagamento: null, valor: 180, pessoa: 'Academia Top' }
  ];


}
