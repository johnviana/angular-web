import { EnderecoDTO } from "../enderecoDTO/entedecoDTO";

export interface PessoaDTO {
  codigo: number;
  nome: string;
  endereco: EnderecoDTO;
  ativo: boolean;
}
