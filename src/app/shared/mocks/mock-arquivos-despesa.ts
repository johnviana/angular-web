import { ArquivoDespesa } from "src/app/dtos/arquivodespesaDTO/arquivoDespesaDTO";


export class MockArquivosDespesa {

  static obterMock(): ArquivoDespesa[] {
    return [
      {
        nomeArquivo: 'COMISSAO_R_SP_250101_250104_250106',
        precoServico: {
          valorCalculado: 1500000,
          valorIrpj: 22500,
          valorLiquido: 1477500
        },
        feePremiacao: {
          valorCalculado: 800000,
          valorIrpj: 12000,
          valorLiquido: 788000
        },
        situacao: 'pendente'
      },
      {
        nomeArquivo: 'BONIFICACAO_R_RJ_250119_250112_250118',
        precoServico: {
          valorCalculado: 1250000,
          valorIrpj: 18000,
          valorLiquido: 1232000
        },
        feePremiacao: {
          valorCalculado: 500000,
          valorIrpj: 7500,
          valorLiquido: 492500
        },
        situacao: 'validado'
      },
      {
        nomeArquivo: 'COMISSAO_R_MG_250126_250119_250125',
        precoServico: {
          valorCalculado: 950000,
          valorIrpj: 14250,
          valorLiquido: 935750
        },
        feePremiacao: {
          valorCalculado: 600000,
          valorIrpj: 9000,
          valorLiquido: 591000
        },
        situacao: 'pendente'
      }
    ];
  }
}
