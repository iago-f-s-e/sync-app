import { MigrationInterface, QueryRunner } from "typeorm";

export class Product1654798459407 implements MigrationInterface {
    name = 'Product1654798459407'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "Produto" (
                "cdProduto" int NOT NULL IDENTITY(1, 1),
                "cdgrupo" int NOT NULL,
                "cdSubGrupo" int NOT NULL,
                "cdPessoa" int NOT NULL,
                "cdPessoa_1" int NOT NULL,
                "cdClassificacaoFiscal" int,
                "codPedidoOnline" int,
                "cdFabricante" varchar(255),
                "cdCodigoDIC" varchar(255),
                "cdGEAP" varchar(255),
                "cdUnimed" varchar(255),
                "cdSaoLucas" varchar(255),
                "cdSUS" varchar(255),
                "cdSIMPRO" varchar(255),
                "dsCaminho" varchar(255),
                "cdIPI" varchar(255),
                "cdOperador" varchar(255),
                "cdAnvisa" varchar(255),
                "cdANP" varchar(255),
                "codigoRegistroMS" varchar(255),
                "nrQtdminima" float,
                "nrQtdmaxima" float,
                "nrQtdVendCupon" int,
                "nrQtdPromocao" real,
                "nrDiasValidade" int,
                "nrMargem" float,
                "nrMargem_A_Antes" float,
                "nrMargem_V_Antes" float,
                "nrMargemAtacado" float,
                "Margteorica" real,
                "nrPeso" float,
                "nrCustoAquisicao" real,
                "vlCustoMedio" float,
                "vlCustoAvulso" real,
                "NrCustoFixo" real,
                "nrCustofinal_a" real,
                "nrCustofinal_v" real,
                "nrCustoFinal_A_Antes" money,
                "nrCustoFinal_V_Antes" money,
                "nrPesoBruto" real,
                "nrIpi" real,
                "nrIcms" real,
                "nrIcmsSub" real,
                "nrFrete" real,
                "nrReducao" real,
                "NrOutrosImpostos" real,
                "nrMarkup_A" real,
                "nrMarkup_V" real,
                "nrMarkup_A_Antes" real,
                "nrMarkup_V_Antes" real,
                "PVConcorrente1" real,
                "PVConcorrente2" real,
                "nrRedIcmsCompra" real,
                "dsEmbalagem" varchar(255),
                "dsReferencia" varchar(255),
                "dsPisCofins" varchar(255),
                "dsMercosul" varchar(255),
                "dsEspecificacao" text,
                "dsProdutoNota" varchar(255),
                "dsPromocao" varchar(255),
                "dsPromocaoVarejo" varchar(255),
                "dsIPPT" varchar(255),
                "dsStIPI" varchar(255),
                "dsCFOPD" varchar(255),
                "dsCFOPF" varchar(255),
                "dsCFOPEntD" varchar(255),
                "dsCFOPEntF" varchar(255),
                "dsICMSCombatePobreza" bit NOT NULL,
                "PesoVariado" bit NOT NULL,
                "naoCreditarIcmsCompra" bit,
                "impressoraComanda" varchar(255) NOT NULL,
                "MVAST" real,
                "MVASTRET" real,
                "FLAGMVAST" varchar(255),
                "DISTRED" real,
                "nmproduto" varchar(255) NOT NULL,
                "TP_PROD" varchar(255),
                "dsTIPO_ITEM" varchar(255),
                "tipoComposicao" int,
                "IND_MED" varchar(255),
                "cEAN" varchar(255),
                "dsUnidade" varchar(255) NOT NULL,
                "dsOcultarLote" int NOT NULL,
                "vlCompra" money,
                "Fator_Compra" varchar(255),
                "PrecoMaxConsumidor" real,
                "vlCompra_Antes" money,
                "dtCompra" datetime,
                "dtCadastro" datetime,
                "nrQtdreal" float,
                "nrQtdcontab" float,
                "nrQtdAtacarejo" decimal,
                "vlPreco" money NOT NULL,
                "vlPrecoNovo" money NOT NULL,
                "vlAtacado" money,
                "vlAtacadoNovo" money,
                "dsPrateleira" varchar(255),
                "dsAtivo" varchar(255),
                "dsSituacaoTributaria" varchar(255),
                "dsCodtributacao" varchar(255) NOT NULL,
                "excluirProdutoFidelidade" bit,
                "AtivoApp" bit,
                "dtAlteracao" datetime NOT NULL,
                CONSTRAINT "PK_ba4fb003c77b22b06bd6c79a515" PRIMARY KEY ("cdProduto")
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE "Produto"
        `);
    }

}