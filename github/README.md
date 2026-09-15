# BLACK Táxi Aéreo — site novo

Projeto estático (HTML + CSS + JS puro, sem build/dependências) com o mesmo
espírito visual do site atual, mas revisado e sem os bugs identificados na
análise da versão em produção.

## Como visualizar

Abra `index.html` diretamente no navegador, ou rode um servidor local (ex.:
`python3 -m http.server 8000` dentro da pasta) e acesse `http://localhost:8000`.

Para publicar, basta subir todos os arquivos desta pasta para a hospedagem
atual (ou qualquer serviço de hospedagem estática) — não há backend, banco
de dados ou passo de build.

## Estrutura

```
index.html          Home
fretamento.html      Fretamento executivo
fbo.html             FBO no Aeroporto da Pampulha
empty-leg.html        Conceito Empty Leg + oportunidades
frota.html            Frota (Citation, King Air, Seneca)
depoimentos.html      Depoimentos e cases (nova seção, separada de notícias)
noticias.html         Notícias (estado vazio pronto para receber posts)
fale-conosco.html     Contato: telefones, endereço, mapa e formulário
css/style.css         Design system (cores, tipografia, componentes)
js/main.js            Menu mobile, contadores animados, formulários
assets/img/           Ilustração do avião (SVG) usada no hero
```

## O que foi corrigido em relação ao site atual

- Menu mobile: no site atual o menu "hambúrguer" abria um item solto e mal
  posicionado por cima do conteúdo. Aqui ele abre um painel cheio,
  funcional, com todos os links (`js/main.js`, `.mobile-drawer` no CSS).
- Telefones grudados na página de contato (`(31) 4141-1668(31) 98117-6481`)
  — agora aparecem em linhas separadas, como links clicáveis (`tel:`).
- Formulário "Vamos voar juntos?" cortado no celular — agora cabe
  inteiro na tela, com o botão sempre visível.
- Notícias paradas desde 2023 — a seção de Notícias agora mostra um
  estado vazio elegante em vez de conteúdo desatualizado, e foi separada
  de uma nova seção de Depoimentos/Cases (prova social).
- Sem botão de WhatsApp — agora há um botão flutuante em todas as
  páginas e CTAs diretos para WhatsApp na home e no Fale Conosco.
- Copyright fixo em "©2023" — agora o ano no rodapé é gerado
  automaticamente pelo JavaScript.

## O que você ainda precisa preencher

Tudo abaixo foi deixado como espaço reservado, pronto para receber conteúdo
real sem precisar mexer em código:

- **Fotos**: os quadros com ícone (`.media-frame`) no lugar das fotos do
  hangar, aeronaves e FBO devem ser substituídos por fotos reais — troque
  o `<div class="media-frame">...</div>` por uma tag `<img>` apontando
  para o arquivo em `assets/img/`.
- **Depoimentos** (`depoimentos.html` e a prévia na home): troque os
  textos de exemplo por depoimentos reais de clientes, com nome e empresa.
- **Empty Leg** (`empty-leg.html`): quando houver rotas disponíveis,
  substitua o estado vazio por cards com origem, destino, data e valor.
- **Notícias** (`noticias.html`): ao publicar a primeira matéria, use o
  card de exemplo já presente na página como modelo.
- **Números de telefone e WhatsApp**: confirme se `(31) 4141-1668` e
  `(31) 98117-6481` (usados também nos links `wa.me/553141416681` e
  `tel:`) continuam corretos.
- **Redes sociais**: os ícones do rodapé apontam para `#` — troque pelos
  links reais do LinkedIn, Instagram e YouTube.
- **Mapa**: o iframe do Google Maps em `fale-conosco.html` usa o
  endereço do site atual; confirme se está certo depois de publicar.
- **Formulários**: tanto o formulário de contato quanto o de newsletter
  só mostram uma mensagem de confirmação (não enviam e-mail de verdade).
  Para funcionar de fato, conecte a um serviço de formulário (Formspree,
  um backend próprio, etc.) ou a uma ferramenta de e-mail marketing.
