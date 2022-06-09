import { ProductEntity } from '@src/domain/dtos/product';
import { Nil } from '@src/types/global';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Produto')
export class Product implements ProductEntity {
  @PrimaryGeneratedColumn('increment', { type: 'int', name: 'cdProduto' })
  public readonly id!: number;

  @Column({ type: 'int', name: 'cdgrupo' })
  public readonly groupId!: number;

  @Column({ type: 'int', name: 'cdSubGrupo' })
  public readonly subGroupId!: number;

  @Column({ type: 'int', name: 'cdPessoa' })
  public readonly personId!: number;

  @Column({ type: 'int', name: 'cdPessoa_1' })
  public readonly personOneId!: number;

  @Column({ type: 'int', name: 'cdClassificacaoFiscal', nullable: true })
  public readonly taxClassificationId!: number | Nil;

  @Column({ type: 'int', name: 'codPedidoOnline', nullable: true })
  public readonly onlineOrderId!: number | Nil;

  @Column({ type: 'varchar', name: 'cdFabricante', nullable: true })
  public readonly manufacturerCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdCodigoDIC', nullable: true })
  public readonly dicCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdGEAP', nullable: true })
  public readonly geapCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdUnimed', nullable: true })
  public readonly unimedCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdSaoLucas', nullable: true })
  public readonly saoLucasCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdSUS', nullable: true })
  public readonly susCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdSIMPRO', nullable: true })
  public readonly simproCode: string | Nil;

  @Column({ type: 'varchar', name: 'dsCaminho', nullable: true })
  public readonly pathCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdIPI', nullable: true })
  public readonly ipiCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdOperador', nullable: true })
  public readonly operatorCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdAnvisa', nullable: true })
  public readonly anvisaCode: string | Nil;

  @Column({ type: 'varchar', name: 'cdANP', nullable: true })
  public readonly anpCode: string | Nil;

  @Column({ type: 'varchar', name: 'codigoRegistroMS', nullable: true })
  public readonly msRecordCode: string | Nil;

  @Column({ type: 'float', name: 'nrQtdminima', nullable: true })
  public readonly minQuantity: number | Nil;

  @Column({ type: 'float', name: 'nrQtdmaxima', nullable: true })
  public readonly maxQuantity: number | Nil;

  @Column({ type: 'int', name: 'nrQtdVendCupon', nullable: true })
  public readonly cupomQuantity: number | Nil;

  @Column({ type: 'real', name: 'nrQtdPromocao', nullable: true })
  public readonly promotionQuantity: number | Nil;

  @Column({ type: 'int', name: 'nrDiasValidade', nullable: true })
  public readonly validityDaysQuantity: number | Nil;

  @Column({ type: 'float', name: 'nrMargem', nullable: true })
  public readonly marginValue: number | Nil;

  @Column({ type: 'float', name: 'nrMargem_A_Antes', nullable: true })
  public readonly beforeMarginAValue: number | Nil;

  @Column({ type: 'float', name: 'nrMargem_V_Antes', nullable: true })
  public readonly beforeMarginVValue: number | Nil;

  @Column({ type: 'float', name: 'nrMargemAtacado', nullable: true })
  public readonly wholesaleMarginValue: number | Nil;

  @Column({ type: 'real', name: 'Margteorica', nullable: true })
  public readonly theoreticalMarginValue: number | Nil;

  @Column({ type: 'float', name: 'nrPeso', nullable: true })
  public readonly weightValue: number | Nil;

  @Column({ type: 'real', name: 'nrCustoAquisicao', nullable: true })
  public readonly acquisitionCostValue: number | Nil;

  @Column({ type: 'float', name: 'vlCustoMedio', nullable: true })
  public readonly averageCostValue: number | Nil;

  @Column({ type: 'real', name: 'vlCustoAvulso', nullable: true })
  public readonly singleCostValue: number | Nil;

  @Column({ type: 'real', name: 'NrCustoFixo', nullable: true })
  public readonly fixedCostValue: number | Nil;

  @Column({ type: 'real', name: 'nrCustofinal_a', nullable: true })
  public readonly finalCostAValue: number | Nil;

  @Column({ type: 'real', name: 'nrCustofinal_v', nullable: true })
  public readonly finalCostVValue: number | Nil;

  @Column({ type: 'money', name: 'nrCustoFinal_A_Antes', nullable: true })
  public readonly beforeFinalCostAValue: number | Nil;

  @Column({ type: 'money', name: 'nrCustoFinal_V_Antes', nullable: true })
  public readonly beforeFinalCostVValue: number | Nil;

  @Column({ type: 'real', name: 'nrPesoBruto', nullable: true })
  public readonly grossWeightValue: number | Nil;

  @Column({ type: 'real', name: 'nrIpi', nullable: true })
  public readonly ipiNumber: number | Nil;

  @Column({ type: 'real', name: 'nrIcms', nullable: true })
  public readonly icmsNumber: number | Nil;

  @Column({ type: 'real', name: 'nrIcmsSub', nullable: true })
  public readonly icmsSubNumber: number | Nil;

  @Column({ type: 'real', name: 'nrFrete', nullable: true })
  public readonly shippingNumber: number | Nil;

  @Column({ type: 'real', name: 'nrReducao', nullable: true })
  public readonly reductionNumber: number | Nil;

  @Column({ type: 'real', name: 'NrOutrosImpostos', nullable: true })
  public readonly othersTaxesNumber: number | Nil;

  @Column({ type: 'real', name: 'nrMarkup_A', nullable: true })
  public readonly markupANumber: number | Nil;

  @Column({ type: 'real', name: 'nrMarkup_V', nullable: true })
  public readonly markupVNumber: number | Nil;

  @Column({ type: 'real', name: 'nrMarkup_A_Antes', nullable: true })
  public readonly beforeMarkupANumber: number | Nil;

  @Column({ type: 'real', name: 'nrMarkup_V_Antes', nullable: true })
  public readonly beforeMarkupVNumber: number | Nil;

  @Column({ type: 'real', name: 'PVConcorrente1', nullable: true })
  public readonly concurrentOneNumber: number | Nil;

  @Column({ type: 'real', name: 'PVConcorrente2', nullable: true })
  public readonly concurrentTwoNumber: number | Nil;

  @Column({ type: 'real', name: 'nrRedIcmsCompra', nullable: true })
  public readonly icmsYieldNumber: number | Nil;

  @Column({ type: 'varchar', name: 'dsEmbalagem', nullable: true })
  public readonly packingDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsReferencia', nullable: true })
  public readonly referenceDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsPisCofins', nullable: true })
  public readonly pisCofinsDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsMercosul', nullable: true })
  public readonly mercosurDescription: string | Nil;

  @Column({ type: 'text', name: 'dsEspecificacao', nullable: true })
  public readonly specificationDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsProdutoNota', nullable: true })
  public readonly productNoteDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsPromocao', nullable: true })
  public readonly promotionDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsPromocaoVarejo', nullable: true })
  public readonly retailPromotionDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsIPPT', nullable: true })
  public readonly ipptDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsStIPI', nullable: true })
  public readonly ipiSituationDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsCFOPD', nullable: true })
  public readonly cfopDDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsCFOPF', nullable: true })
  public readonly cfopFDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsCFOPEntD', nullable: true })
  public readonly cfopEntDDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsCFOPEntF', nullable: true })
  public readonly cfopEntFDescription: string | Nil;

  @Column({ type: 'bit', name: 'dsICMSCombatePobreza' })
  public readonly isIcmsFightPoverty!: boolean;

  @Column({ type: 'bit', name: 'PesoVariado' })
  public readonly isAssortedWeight!: boolean;

  @Column({ type: 'bit', name: 'naoCreditarIcmsCompra', nullable: true })
  public readonly noCreditIcmsPurchase!: boolean | Nil;

  @Column({ type: 'varchar', name: 'impressoraComanda' })
  public readonly commandPrinter!: string;

  @Column({ type: 'real', name: 'MVAST', nullable: true })
  public readonly mvast!: number;

  @Column({ type: 'real', name: 'MVASTRET', nullable: true })
  public readonly mvastret!: number;

  @Column({ type: 'varchar', name: 'FLAGMVAST', nullable: true })
  public readonly mvastFlag: string | Nil;

  @Column({ type: 'real', name: 'DISTRED', nullable: true })
  public readonly distred: number | Nil;

  @Column({ type: 'varchar', name: 'nmproduto' })
  public readonly name!: string;

  @Column({ type: 'varchar', name: 'TP_PROD', nullable: true })
  public readonly type: string | Nil;

  @Column({ type: 'varchar', name: 'dsTIPO_ITEM', nullable: true })
  public readonly itemType: string | Nil;

  @Column({ type: 'int', name: 'tipoComposicao', nullable: true })
  public readonly compositionType: number | Nil;

  @Column({ type: 'varchar', name: 'IND_MED', nullable: true })
  public readonly indMed: string | Nil;

  @Column({ type: 'varchar', name: 'cEAN', nullable: true })
  public readonly cean: string | Nil;

  @Column({ type: 'varchar', name: 'dsUnidade' })
  public readonly unit!: string;

  @Column({ type: 'int', name: 'dsOcultarLote' })
  public readonly hideBatch!: number;

  @Column({ type: 'money', name: 'vlCompra', nullable: true })
  public readonly purchasePrice: number | Nil;

  @Column({ type: 'varchar', name: 'Fator_Compra', nullable: true })
  public readonly purchaseFactor: string | Nil;

  @Column({ type: 'real', name: 'PrecoMaxConsumidor', nullable: true })
  public readonly maxConsumerPrice: number | Nil;

  @Column({ type: 'money', name: 'vlCompra_Antes', nullable: true })
  public readonly beforePurchasePrice: number | Nil;

  @Column({ type: 'datetime', name: 'dtCompra', nullable: true })
  public readonly purchaseDate: Date | Nil;

  @Column({ type: 'datetime', name: 'dtCadastro', nullable: true })
  public readonly createdDate: Date | Nil;

  @Column({ type: 'float', name: 'nrQtdreal', nullable: true })
  public readonly realQuantity!: number | Nil;

  @Column({ type: 'float', name: 'nrQtdcontab', nullable: true })
  public readonly accountingQuantity!: number | Nil;

  @Column({ type: 'decimal', name: 'nrQtdAtacarejo', nullable: true })
  public readonly wholesaleRetailQuantity!: number | Nil;

  @Column({ type: 'money', name: 'vlPreco' })
  public readonly price!: number;

  @Column({ type: 'money', name: 'vlPrecoNovo' })
  public readonly newPrice!: number;

  @Column({ type: 'money', name: 'vlAtacado', nullable: true })
  public readonly wholesaleValue!: number | Nil;

  @Column({ type: 'money', name: 'vlAtacadoNovo', nullable: true })
  public readonly newWholesaleValue!: number | Nil;

  @Column({ type: 'varchar', name: 'dsPrateleira', nullable: true })
  public readonly shelfDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsAtivo', nullable: true })
  public readonly activeDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsSituacaoTributaria', nullable: true })
  public readonly taxSituationDescription: string | Nil;

  @Column({ type: 'varchar', name: 'dsCodtributacao' })
  public readonly taxationCode!: string;

  @Column({ type: 'bit', name: 'excluirProdutoFidelidade', nullable: true })
  public readonly deleteProductLoyalty: boolean | Nil;

  @Column({ type: 'bit', name: 'AtivoApp', nullable: true })
  public readonly isActive: boolean | Nil;

  @Column({ type: 'datetime', name: 'dtAlteracao' })
  public readonly updateDate: Date | Nil;
}
