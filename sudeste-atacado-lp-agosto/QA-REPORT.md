# Relatório de QA — Landing Page Sudeste Atacado × Intelbras

Data da validação inicial: 11/08/2026  
Última revisão validada: 18/08/2026

## Escopo validado

- Renderização via servidor HTTP local.
- Desktop em 1280 px.
- Layouts reais em iframes same-origin de 320, 390 e 768 px.
- Catálogo, busca, filtros, ordenação e estados vazios.
- Menu mobile, painel de filtros e barra fixa de conversão.
- Consentimento de cookies e modal de privacidade.
- Links de WhatsApp por produto.
- Integridade dos arquivos e correspondência com a planilha aprovada.
- Acessibilidade automatizada WCAG 2 A/AA com axe-core.

## Resultados

- **Catálogo:** 43 SKUs únicos, em correspondência exata com código, nome, desconto e campanha da planilha atualizada.
- **Seleção exibida:** os 43 produtos presentes na planilha foram mantidos; nenhum produto fora da planilha permaneceu no site.
- **Destaques:** os 10 SKUs indicados pela supervisão aparecem primeiro e recebem tratamento visual “Maior desconto”.
- **Validade:** referências visíveis atualizadas para 30/09/2026.
- **CTA:** cards, fechamento da página e barra mobile usam “Confira toda a linha de produtos”, direcionando ao WhatsApp comercial.
- **Responsividade:** sem overflow horizontal em 320, 390, 768 e 1280 px.
- **Hero mobile:** diagonais e marca-d'água decorativas desativadas abaixo de 760 px; fundo contínuo, sem recortes ou sobreposição no título.
- **Catálogo fixo:** apenas os 10 produtos prioritários são renderizados; os demais SKUs continuam na base para busca e conferência, mas não são expandidos na página.
- **CTA após catálogo:** “Ver mais ofertas” abre o WhatsApp `5527992328081` com mensagem exclusiva desse ponto.
- **Barra superior:** removido o link redundante “Ver ofertas”; permaneceram somente campanha, validade e condição.
- **Tipografia:** títulos, subtítulos, textos e botões reduzidos em aproximadamente 20–30% para melhorar a densidade em notebook.
- **Rodapé:** telefone atualizado para `(27) 99232-8081`, agora clicável com mensagem exclusiva de rodapé.
- **Navegação mobile:** drawer branco entra pela direita, mantém overlay contínuo, bloqueia a rolagem e fecha pelo botão, backdrop, link ou tecla Escape. O painel usa limites fixos da viewport recalculados pela posição real do cabeçalho, preservando o header sticky mesmo quando o menu é aberto após rolagem.
- **Ações fixas:** painel de filtros termina acima da barra mobile, sem colisão.
- **Cookie mobile:** enquanto o aviso está aberto, a barra fixa é ocultada; após a escolha, ela aparece normalmente.
- **Acessibilidade:** zero violações automáticas WCAG 2 A/AA em 320, 390, 768 e 1280 px.
- **Console:** nenhum erro JavaScript encontrado.
- **Sintaxe:** `node --check app.js` aprovado.
- **Referências locais:** todos os `src`/`href` locais apontam para arquivos existentes.
- **Conteúdo:** 1 H1, IDs únicos, imagens com `alt`, termos promocionais não homologados ausentes.

## Observação de produção

Os packshots oficiais fornecidos pela supervisão foram baixados da Intelbras e aplicados aos 10 SKUs prioritários em `assets/products/`. As imagens usam `object-fit: contain`, foram verificadas no navegador e carregaram sem cortes ou arquivos quebrados. Os demais 33 SKUs permanecem na base reconciliada para busca e filtros, mas não aparecem na renderização inicial limitada aos 10 destaques.

## Revisão final — imagens e copy

- Hero atualizada para **“Ofertas Mês do Cliente”**.
- CTA após o catálogo atualizado para **“Confira toda a linha de produtos”**, preservando o mesmo link de WhatsApp.
- Validação no navegador: 10 imagens carregadas, 0 quebradas e sem overflow horizontal.

## Alterações finais — treinamentos e pontos de venda (18/08/2026)

- Hero preservada com os dois CTAs existentes e inclusão de um **terceiro CTA**, “Quero me inscrever”.
- Novo CTA validado com o destino exato `https://forms.gle/i7cyxMbncCKWYgWCA`; o encurtador respondeu e redirecionou para o Google Forms.
- Inclusão da frase de apoio “Participe das próximas salas de treinamento da Sudeste.”
- A seção “Tecnologia Intelbras com atendimento para acertar no projeto.” foi removida.
- Nova seção aplicada com a imagem “Conheça a Sudeste mais perto de você” e os quatro pontos de venda: Vila Velha, Muriaé, Guarapari e Campos dos Goytacazes.
- A imagem original de 1069 × 589 px foi incorporada localmente em `assets/locations/`, sem dependência externa, com texto alternativo e abertura ampliada ao toque/clique.
- QA real em Chromium headless nas larguras de **1280 px** e **390 px**: 3 CTAs na Hero, imagem carregada, link de treinamento exato, 0 px de overflow horizontal e nenhum erro no console.
- Verificação sintática de `app.js`, parsing do HTML e balanceamento das chaves do CSS aprovados.
