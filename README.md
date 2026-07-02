# Pousada Paraíso — site (staging)

**TEMA · paraiso-site · v0.1.0 · 2026-07-01**
Primeiro passe do site da Pousada Paraíso (GR-PAR), Ilha Grande.
Cópia isolada em staging — **nada publicado**.

## O que é
- **One-page** com âncoras: `Sobre · Quartos · Pacotes · Como chegar · Avaliações · Reservar`.
  Clicar no menu rola até a seção dentro da própria home.
- **Páginas de produto** (saem da home): quartos e pacotes têm página própria.
  - `quarto.html` — template de quarto (exemplo: Suíte Standard).
  - `pacote.html` — template de pacote (exemplo: Pacote Romântico).
  - Os cards da home linkam com `?tipo=...` (ex.: `quarto.html?tipo=master`). Hoje são
    templates estáticos; a variação por tipo é o próximo passo (JSON de conteúdo).

## Identidade (travada — fonte: Notion "IDENTIDADE VISUAL · PARAÍSO v1.0.0")
- Verde Palmeira `#14402E` · Verde Tropical `#2F9E63` · Menta `#93D9AE`
- Brisa Verde `#E8F3EB` · Branco `#FFFFFF` · **Amarelo Sol `#FFC02E` (só CTA/preço)**
- Tipografia: Baloo Bhai 2 (marca) · Baloo Thambi 2 (títulos) · League Spartan (caps/CTA/preço) · Montserrat (corpo) · Cabin (utilitário)
- Assinatura: o **sol nasce conforme o scroll** (respeita `prefers-reduced-motion`).

## Rodar localmente
```bash
cd ~/Claude/pousada-paraiso
python3 -m http.server 4321
# abrir http://localhost:4321
```
(No app, o preview já está configurado como server **"paraiso"** em `.claude/launch.json`.)

## Estrutura
```
pousada-paraiso/
├── index.html        # landing one-page
├── quarto.html       # página de produto — quarto (template)
├── pacote.html       # página de produto — pacote (template)
├── assets/
│   ├── styles.css    # tokens + componentes
│   └── app.js        # sol-scroll, menu mobile, link ativo
└── README.md
```

## Como reverter
É estático e isolado: nada afeta sites publicados. Para descartar tudo:
```bash
rm -rf ~/Claude/pousada-paraiso
```
E remover o bloco `"paraiso"` de `~/Claude/.claude/launch.json`.

## ⚠️ A DEFINIR (marcado em amarelo no site — preencher antes de publicar)
1. **Fotos reais** — hero, 2 quartos, 3 pacotes, mapa/fachada.
2. **Reserva** — nº do WhatsApp oficial (troca `55XXXXXXXXXXX`) e link do motor Cloudbeds (`data-book`).
3. **Quartos** — capacidade (pax), metragem, camas, o que inclui, **preço/diária** por categoria.
4. **Pacotes** — o que inclui exatamente e **preço** (Romântico, Early/Late check-out, Day-use).
5. **Avaliações** — nota oficial + nº de reviews + 3 depoimentos reais (fonte: TripAdvisor/Google/Booking).
6. **Como chegar** — endereço oficial, tempo/horários da travessia, distância da Vila, embed do mapa.
7. **Contato/rede** — Instagram, e-mail, WhatsApp.
8. **Logo** oficial (hoje é uma marca provisória "sol+palmeira").

## Versionamento
- v0.1.0 (2026-07-01) — primeiro passe: arquitetura one-page + páginas de produto, identidade Palmeira & Sol aplicada, conteúdo do playbook POU, slots A DEFINIR.
