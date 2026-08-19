# Deploy na Vercel — LP Sudeste Atacado × Intelbras

Site 100% estático (HTML + CSS + JS puro). **Não há build, nem dependências, nem package.json.**

## Estrutura

```
/                                  <- raiz do repositório (deploy daqui)
├─ vercel.json                     <- config de deploy (output dir + headers)
├─ .vercelignore                   <- remove docs/.claude do bundle
├─ .gitignore
└─ sudeste-atacado-lp-agosto/      <- conteúdo publicado
   ├─ index.html
   ├─ styles.css
   ├─ app.js
   └─ assets/
```

O `vercel.json` da raiz aponta `outputDirectory` para `sudeste-atacado-lp-agosto`,
então a LP é servida em `/` (e não em `/sudeste-atacado-lp-agosto/`).

## Publicar

### Opção 1 — CLI

```bash
npx vercel --prod
```

Na primeira execução: Framework Preset = **Other**, Build Command = vazio,
Output Directory = `sudeste-atacado-lp-agosto` (já vem do `vercel.json`).

### Opção 2 — Git + dashboard

1. `git init && git add . && git commit -m "LP Sudeste Atacado x Intelbras"`
2. Suba para GitHub/GitLab e importe o repositório na Vercel.
3. Framework Preset: **Other**. Não preencher Build Command.
4. O `vercel.json` já define o Output Directory.

> Alternativa: se preferir ignorar o `vercel.json` da raiz, defina
> **Root Directory = `sudeste-atacado-lp-agosto`** nas configurações do projeto.
> Nesse caso os headers de cache/segurança do `vercel.json` não serão aplicados.

## O que o vercel.json já configura

- `outputDirectory`: publica a pasta da LP na raiz do domínio.
- `cleanUrls`: URLs sem `.html`.
- Cache de 1 ano e imutável para `/assets/*`.
- `must-revalidate` para HTML/CSS/JS (o versionamento `?v=` continua funcionando).
- Headers de segurança: `X-Content-Type-Options`, `X-Frame-Options`,
  `Referrer-Policy`, `Permissions-Policy`.

## Rodar localmente

```bash
python -m http.server 8080 -d sudeste-atacado-lp-agosto
```

Acesse http://localhost:8080

## Checklist antes do domínio final

- [ ] IDs homologados de GA4 / Meta Pixel (a página só dispara `window.dataLayer`).
- [ ] Revisão comercial/jurídica da condição e da validade (30/09/2026).
- [ ] `og:image` — hoje não existe; definir imagem de compartilhamento.
- [ ] `og:url` / canonical com o domínio definitivo.
- [ ] Testar WhatsApp, filtros e layout em 360px, tablet e desktop.
