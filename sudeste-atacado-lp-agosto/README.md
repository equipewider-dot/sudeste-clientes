# LP Ofertas Dia do Cliente — Sudeste Atacado × Intelbras

Landing page estática B2B da campanha de agosto de 2026, pronta para abrir diretamente ou servir em qualquer hospedagem estática.

## Arquivos

- `index.html` — estrutura, SEO, JSON-LD, conteúdo e componentes da página.
- `styles.css` — layout responsivo, identidade Sudeste, acessibilidade e estados.
- `app.js` — catálogo com 43 SKUs, exibição inicial de 10 itens, expansão “Ver mais”, busca, filtros, ordenação, drawer mobile, consentimento e eventos.
- `assets/logo/` — versões oficiais necessárias do logo Sudeste Atacado.
- `assets/icons/` — ícones funcionais utilizados na página.
- `assets/hero/` — foto de banco de imagens usada no hero (crédito em `CREDITOS.md`).
- `assets/products/` — diretório preparado para os packshots oficiais.
- `BRIEFING-APROVADO.md` — briefing consolidado usado na implementação.
- `QA-REPORT.md` — evidências dos testes funcionais, responsivos e de acessibilidade.

## Executar localmente

Na pasta deste projeto:

```bash
python3 -m http.server 8080
```

Acesse `http://localhost:8080/`.

Também é possível abrir `index.html` diretamente no navegador. O servidor local é recomendado para simular publicação.

## Catálogo e imagens

Os 43 produtos foram transcritos da planilha aprovada. Como a fonte não contém packshots, cada card possui um placeholder identificado pelo código do material. Para inserir uma imagem oficial:

1. Salve o arquivo em `assets/products/`, preferencialmente WebP ou AVIF.
2. No método `card()` de `app.js`, substitua o bloco `.placeholder` por uma tag `img` apontando para o código correspondente.
3. Preserve `loading="lazy"`, dimensões e texto alternativo com nome/código do produto.

Nenhum preço ou especificação técnica foi inferido. A FR331 (`4670331`) aparece sem desconto, com o selo “Produto participante”.

Por padrão, a vitrine mostra 10 produtos. O botão “Ver mais” revela os demais e muda para “Ver menos”. Ao aplicar uma busca ou filtro, o limite é recalculado e o botão é ocultado quando o resultado tem até 10 itens.

## Analytics

A página envia eventos para `window.dataLayer`, sem carregar bibliotecas externas:

- `view_item_list`
- `select_item`
- `view_item`
- `generate_lead`
- `contact`
- `catalog_toggle`
- `consent_update`

Para produção, instale os IDs aprovados de GA4/Meta Pixel no gerenciador de tags e respeite o evento de consentimento. CTAs gerais possuem `cta_id`; CTAs de produto incluem SKU e nome. Parâmetros UTM da URL de entrada são preservados nos links de WhatsApp.

## Publicação

Publique a pasta inteira mantendo a estrutura relativa. Antes de subir:

- inserir os 43 packshots oficiais;
- configurar analytics somente com os IDs homologados;
- revisar comercial/jurídico da condição e validade;
- testar WhatsApp, filtros e visualização em 360 px, tablet e desktop.

## Validade e escopo

Campanha válida de 01/08/2026 a 30/09/2026, exclusiva para CNPJ, sujeita a disponibilidade e análise comercial. A página não inclui sorteios, prêmios ou regulamentos e não inventa preços, saldo ou atributos técnicos.
