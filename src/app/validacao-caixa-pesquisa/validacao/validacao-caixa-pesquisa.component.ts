import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MockArquivosDespesa } from 'src/app/shared/mocks/mock-arquivos-despesa';

interface RegistroFinanceiro {
  valorCalculado: number;
  valorIrpj: number;
  valorLiquido: number;
}

interface ArquivoDespesa {
  nomeArquivo: string;
  precoServico: RegistroFinanceiro;
  feePremiacao: RegistroFinanceiro;
  situacao: 'pendente' | 'validado';
}

@Component({
  selector: 'app-validacao-caixa-pesquisa',
  templateUrl: './validacao-caixa-pesquisa.component.html',
  styleUrls: ['./validacao-caixa-pesquisa.component.css']
})
export class ValidacaoCaixaPesquisaComponent implements OnInit {

  // Abas superiores
  abas: MenuItem[] = [];
 abaAtiva!: MenuItem;

  // Filtros
  filtro: any = {
    tipoArquivo: null,
    siglaEmpresa: '',
    mesReferencia: null,
    ano: new Date().getFullYear(),
    nomeArquivo: ''
  };

  tiposArquivo = [
    { label: 'COMISSÃO', value: 'COMISSAO' },
    { label: 'BONIFICAÇÃO', value: 'BONIFICACAO' }
  ];

  meses = [
    { label: 'Janeiro', value: 1 },
    { label: 'Fevereiro', value: 2 },
    { label: 'Março', value: 3 },
    { label: 'Abril', value: 4 },
    { label: 'Maio', value: 5 },
    { label: 'Junho', value: 6 },
    { label: 'Julho', value: 7 },
    { label: 'Agosto', value: 8 },
    { label: 'Setembro', value: 9 },
    { label: 'Outubro', value: 10 },
    { label: 'Novembro', value: 11 },
    { label: 'Dezembro', value: 12 }
  ];

  // Lista de arquivos e seleção
  arquivos: ArquivoDespesa[] = [];
  selecionados: ArquivoDespesa[] = [];

  constructor() {}

  ngOnInit(): void {
    this.configurarAbas();
    this.pesquisar();
  }

  configurarAbas() {
    this.abas = [
      {
        label: 'Arquivos Pendentes de Validação',
        icon: 'pi pi-search',
        command: () => this.onSelecionaAba('pendentes')
      },
      {
        label: 'Consultar Despesas',
        icon: 'pi pi-folder-open',
        command: () => this.onSelecionaAba('consultar')
      }
    ];
    this.abaAtiva = this.abas[0]; // Aba ativa padrão
  }

  onSelecionaAba(nome: string) {
    console.log('Aba selecionada:', nome);
    // Aqui você pode adicionar navegação entre rotas se desejar
  }

  navegar(event: any) {
    this.abaAtiva = event.value;
  }

  pesquisar(): void {
    // Dados mockados conforme o exemplo da imagem
    this.arquivos = MockArquivosDespesa.obterMock();
    this.selecionados = []; // Limpa seleção
  }

  limpar(): void {
    this.filtro = {
      tipoArquivo: null,
      siglaEmpresa: '',
      mesReferencia: null,
      ano: new Date().getFullYear(),
      nomeArquivo: ''
    };
    this.arquivos = [];
    this.selecionados = [];
  }
}
