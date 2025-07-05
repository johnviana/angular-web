import { CategoriaDTO } from "../categoriaDTO/categoriaDTO";
import { PessoaDTO } from "../pessoaDTO/pessoaDTO";

export interface LancamentoDTO {
  codigo: number;
  descricao: string;
  dataVencimento: string;      // ou Date, se converter manualmente
  dataPagamento?: string | null;
  valor: number;
  observacao?: string | null;
  tipo: 'RECEITA' | 'DESPESA';
  categoria: CategoriaDTO;
  pessoa: PessoaDTO;
  totalElements: number;
}
