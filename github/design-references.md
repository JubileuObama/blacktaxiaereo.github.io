# Referências de design — aviação executiva / luxo

Pesquisa feita em set/2026 para orientar a próxima versão (mais dinâmica,
"caprichada", com sensação de luxo mais forte) do site da BLACK Táxi Aéreo.

## Sites analisados

**Boom Supersonic** — boomsupersonic.com
Sistema visual dramático: vídeo full-screen, tipografia grande e ousada,
animações dinâmicas, azul elétrico sobre preto profundo. Bom exemplo de
"tecnológico + luxuoso" sem parecer frio.

**Gulfstream Aerospace** — gulfstream.com
Fotografia de altíssimo padrão, tipografia elegante, tours de cabine em
360°. Luxo "old money": nada exagerado, tudo muito bem produzido.

**VistaJet** — vistajet.com
Visuais cinematográficos de aeronave/cabine, mapa de rotas interativo,
conteúdo que se adapta ao perfil do visitante. Muito próximo do segmento
da BLACK (fretamento executivo).

**NetJets** — netjets.com
Paleta azul-marinho + dourado, fotografia profissional, tipografia
refinada — transmite autoridade e confiança. É o mais "clássico" da lista.

**Archer Aviation / Joby Aviation** — archer.com / jobyaviation.com
eVTOL (carros voadores/air taxi urbano). Tipografia grande e ousada,
imagens de alto contraste, azul elétrico, muito espaço em branco.
Referência boa para "dinamismo moderno" sem perder sofisticação.

**Platoon Aviation** — Site of the Day no Awwwards (nota 7.5/10)
Paleta de só 3 cores (preto, branco, um vermelho-coral de destaque),
scroll suave com parallax, animações feitas com GSAP, renders 3D
(Cinema 4D) da experiência de voo. Ótimo exemplo de "menos cores, mais
impacto" — dá pra adaptar a lógica pro preto/dourado da BLACK.

**XOJET** — case da agência We Are Fine (wearefine.com)
Interface "tipo app": ferramenta de escolha de aeronave por distância,
formulários que já vêm parcialmente preenchidos, fotografia imersiva
combinada com elementos gráficos leves (vetor). O luxo aqui é a
*facilidade*, não o exagero visual — "poupar o tempo de quem já tem
pouco tempo".

## Observação ao vivo (navegador) — set/2026

Depois da pesquisa por texto, abri Pilatus e Gulfstream num navegador de
verdade (a pesquisa por texto simples não captura scroll/animação em JS).

**Pilatus (pilatus-aircraft.com)** — storytelling cinematográfico por scroll:
tela cheia carrega em preto (vídeo/preloader), depois revela o hero do PC-12
PRO com botão pílula "Discover". Ao rolar, a aeronave "voa" por nuvens de
tempestade dramáticas (parece controlado pelo scroll, não só parallax
simples), e a cena transiciona para um close de cockpit (painel digital +
mão do piloto). Há marcadores verticais fixos na borda direita da tela —
provavelmente indicador de progresso/seção. É o exemplo mais "cinema" da
lista: cada scroll é uma cena nova, não só uma imagem que desliza.

**Gulfstream (gulfstream.com/en)** — dinamismo contido, "old money":
hero "FLY THE FUTURE" com foto de avião em pôr do sol com leve desfoque de
movimento (motion blur), tipografia serif clássica no logo. Ao rolar, blocos
de texto e imagem entram com fade/nitidez progressiva (o texto começa
desfocado/translúcido e "revela" conforme entra na tela), com composições
assimétricas — uma foto grande de avião sobrepondo parcialmente uma foto
menor de hangar/interior. Nada de parallax agressivo; o efeito é sutil,
quase editorial — mais "página de revista de luxo que ganha vida" do que
"jogo 3D".

## O que isso significa para o site da BLACK

- **Hero com mais presença**: vídeo em loop (hangar, decolagem, cabine)
  ou pelo menos fotografia em altíssima resolução ocupando a tela toda,
  não só um SVG decorativo como na v1.
- **Tipografia maior e com mais hierarquia**: títulos ainda maiores,
  variação de peso mais dramática (como Boom e Archer fazem).
- **Paleta mais restrita e proposital**: preto + dourado já está certo
  (Platoon Aviation prova que "poucas cores" funciona muito bem em
  aviação de luxo) — o próximo passo é usar o dourado com mais
  intenção (detalhes, não só botões).
- **Movimento com propósito**: scroll com parallax sutil, elementos que
  reagem ao mouse/scroll (GSAP ou equivalente), números e cards com
  micro-interações — não só o contador que já existe.
- **Mapa de rotas ou frota interativo**: como o VistaJet — encaixa bem
  com a seção de Frota e Empty Leg que já existem.
- **Sensação de "app", não só "site"**: formulários mais inteligentes
  (como o Jet Picker da XOJET) deixam a experiência de cotação mais
  premium do que um formulário genérico.
- **Fotografia/vídeo reais da frota e do hangar** (aguardando os
  arquivos do usuário) são o maior salto de qualidade percebida — nenhum
  dos exemplos acima depende de ilustração/ícone no lugar de foto.

## Plano de implementação — decisão do usuário (17/set/2026)

O usuário definiu a direção: **formato da VistaJet** (estrutura/conteúdo) +
**efeitos dinâmicos da Pilatus, e ainda mais da Platoon e da Gulfstream**
(comportamento/animação), com **NetJets simplificado como opção de reserva**
caso o resultado fique complexo demais.

Como isso vira, de fato, camadas separadas do mesmo site:

1. **Estrutura (VistaJet)** — a arquitetura de página já é muito próxima do
   que a BLACK precisa: hero cinematográfico → seção de frota/serviços →
   prova social → CTA de cotação recorrente. A v1 já segue essa lógica; o
   que falta é "vestir" essa estrutura com o comportamento certo.
2. **Comportamento de scroll (Pilatus + Platoon)** — cada seção principal
   (hero, frota, empty leg, stats) revela com uma transição de propósito ao
   entrar na tela: fade + leve translação vertical (16–24px) com easing
   suave, não um "aparecer" seco. Números da stats-band ganham um pouco de
   parallax (a imagem de fundo se move mais devagar que o texto). Isso é
   GSAP + ScrollTrigger (ou IntersectionObserver + CSS transitions, mais
   leve, sem dependência nova) — a opção mais simples primeiro.
3. **Acabamento visual (Gulfstream)** — texto/imagem revelando com
   nitidez progressiva (blur→foco) em vez de simples fade, composições
   assimétricas de foto (uma imagem grande sobrepondo uma menor), e
   moderação: nem toda seção precisa de efeito, só as de maior impacto
   (hero, frota, transição para stats).
4. **Reserva (NetJets)** — se o resultado ficar pesado/lento ou difícil de
   manter, cortar para: fade-in simples ao rolar (sem parallax, sem
   blur-reveal) + fotografia de altíssima qualidade fazendo o trabalho
   pesado. É a versão "sempre funciona", ótima como rede de segurança.

**Prioridade de execução** (assim que houver fotos/logo reais):
1. Hero da home em tela cheia com foto/vídeo real de frota ou hangar,
   título maior com hierarquia mais dramática, CTA "Descubra" no estilo
   Pilatus.
2. Scroll-reveal (fade + translate) nas seções principais de todas as
   páginas — ganho de percepção alto, custo de implementação baixo.
3. Micro-interações nos cards de frota/serviços (leve scale/glow no
   hover, como Platoon).
4. Parallax sutil na stats-band e composições assimétricas de foto nas
   páginas internas (Fretamento, FBO, Frota) — via Gulfstream.
5. (Opcional, fase 2) Mapa de rotas ou "seletor de aeronave" interativo,
   inspirado no VistaJet/XOJET, para a página de Frota/Empty Leg.

## Fontes
- https://azurodigital.com/aviation-website-examples/
- https://epicedits.co.uk/blog/private-jet-web-design-trends/
- https://www.awwwards.com/sites/platoon-aviation
- https://www.wearefine.com/work/xojet-website/
- https://www.vistajet.com/
- https://www.netjets.com/
- https://www.gulfstream.com/
- https://boomsupersonic.com/
- https://www.archer.com/
- https://www.jobyaviation.com/
