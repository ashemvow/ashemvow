# Ashem Vow · site oficial

Site estático (HTML, CSS e JS puro). Sem build.

## Como editar
Tudo fica em `content.js`: novidades, textos, galeria, Instagram, Pix, LivePix e anúncios.
- Nova novidade: copie um bloco em `novidades` e cole no topo.
- Nova imagem: coloque em `assets/` e adicione em `galeria`.
- Instagram: troque `SEU_USUARIO`.
- Anúncios: preencha `client` e `slot` do Google AdSense.

## Publicar (GitHub + Netlify)
1. Crie um repositório no GitHub e envie estes arquivos.
2. No Netlify: Add new site, Import from Git, escolha o repositório.
3. Build command vazio, publish directory `.`. Cada commit atualiza o site.

## Seção "Andamento"
Em `content.js`, o bloco `andamento` tem 3 colunas (já no teste, em produção, planejado). Mova um item de coluna quando ele ficar pronto. Só coloque em "Já no teste jogável" o que realmente roda no jogo.

## Novas seções (v4)
`personagens`, `criaturas` e `cenarios` em `content.js` alimentam as seções do mesmo nome. As imagens estão em `assets/` (WebP com fundo transparente).

## novidades.txt
O jogo lê `novidades.txt` (na raiz do site) na aba Novidades. Edite esse arquivo para atualizar o texto dentro do jogo sem lançar nova versão. Mantenha texto simples.
