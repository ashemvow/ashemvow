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
