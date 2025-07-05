import { RegistroFinanceiro } from "./registrofinanceiroDTO";

export interface ArquivoDespesa {
  nomeArquivo: string;
  precoServico: RegistroFinanceiro;
  feePremiacao: RegistroFinanceiro;
  situacao: 'pendente' | 'validado';
}
