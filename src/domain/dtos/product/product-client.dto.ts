import { Nil } from '@src/types/global';

export type ProductClient = {
  cdProduto: number;
  cdgrupo: number;
  cdSubGrupo: number;
  cdPessoa: number;
  cdPessoa_1: number;
  cdClassificacaoFiscal?: number | Nil;
  codPedidoOnline?: number | Nil;
  cdFabricante?: string | Nil;
  cdCodigoDIC?: string | Nil;
  cdGEAP?: string | Nil;
  cdUnimed?: string | Nil;
  cdSaoLucas?: string | Nil;
  cdSUS?: string | Nil;
  cdSIMPRO?: string | Nil;
  cdCaminho?: string | Nil;
  cdIPI?: string | Nil;
  cdOperador?: string | Nil;
  cdAnvisa?: string | Nil;
  cdANP?: string | Nil;
  codigoRegistroMS?: string | Nil;
  nrQtdminima?: number | Nil;
  nrQtdmaxima?: number | Nil;
  nrQtdVendCupon?: number | Nil;
  nrQtdPromocao?: number | Nil;
  nrDiasValidade?: number | Nil;
  nrMargem?: number | Nil;
  nrMargem_A_Antes?: number | Nil;
  nrMargem_V_Antes?: number | Nil;
  nrMargemAtacado?: number | Nil;
  Margteorica?: number | Nil;
  nrPeso?: number | Nil;
  nrCustoAquisicao?: number | Nil;
  vlCustoMedio?: number | Nil;
  vlCustoAvulso?: number | Nil;
  NrCustoFixo?: number | Nil;
  nrCustoFinal_a?: number | Nil;
  nrCustoFinal_v?: number | Nil;
  nrCustoFinal_A_Antes?: number | Nil;
  nrCustoFinal_V_Antes?: number | Nil;
  nrPesoBruto?: number | Nil;
  nrIpi?: number | Nil;
  nrIcms?: number | Nil;
  nrIcmsSub?: number | Nil;
  nrFrete?: number | Nil;
  nrReducao?: number | Nil;
  NrOutrosImpostos?: number | Nil;
  nrMarkup_A?: number | Nil;
  nrMarkup_V?: number | Nil;
  nrMarkup_A_ANTES?: number | Nil;
  nrMarkup_V_ANTES?: number | Nil;
  PVConcorrente_1?: number | Nil;
  PVConcorrente_2?: number | Nil;
  nrRedIcmsCompra?: number | Nil;
  dsEmbalagem?: string | Nil;
  dsReferencia?: string | Nil;
  dsPisCofins?: string | Nil;
  dsMercosul?: string | Nil;
  dsEspecificacao?: string | Nil;
  dsProdutoNota?: string | Nil;
  dsPromocao?: string | Nil;
  dsPromocaoVarejo?: string | Nil;
  dsIPPT?: string | Nil;
  dsStIPI?: string | Nil;
  dsCFOPD?: string | Nil;
  dsCFOPF?: string | Nil;
  dsCFOPEntD?: string | Nil;
  dsCFOPEntF?: string | Nil;
  dsICMSCombatePobreza: boolean;
  PesoVariado: boolean;
  naoCreditarIcmsCompra: boolean;
  impressoraComanda: string;
  MVAST: number;
  MVASTRET: number;
  FLAGMVAST?: string | Nil;
  DISTRED?: number | Nil;
  nmproduto: string;
  TP_PROD?: string | Nil;
  dsTIPO_ITEM?: string | Nil;
  tipoComposicao?: number | Nil;
  IND_MED?: string | Nil;
  cEAN?: string | Nil;
  dsUnidade: string;
  dsOcultarLote: number;
  vlCompra?: number | Nil;
  Fator_Compra?: string | Nil;
  PrecoMaxConsumidor?: number | Nil;
  vlCompra_Antes?: number | Nil;
  dtCompra?: Date | Nil;
  dtCadastro?: Date | Nil;
  nrQtdreal?: number | Nil;
  nrQtdcontab?: number | Nil;
  nrQtdAtacarejo?: number | Nil;
  vlPreco: number;
  vlPrecoNovo: number;
  vlAtacado?: number | Nil;
  vlAtacadoNovo?: number | Nil;
  dsPrateleira?: string | Nil;
  dsAtivo?: string | Nil;
  dsSituacaoTributaria?: string | Nil;
  dsCodtributacao: string;
  excluirProdutoFidelidade?: boolean | Nil;
  AtivoApp?: boolean | Nil;
  dtAlteracao?: Date | Nil;
};
