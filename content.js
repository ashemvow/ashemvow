/* ============================================================
   EDITE AQUI. Todo o conteúdo do site vem deste arquivo.
   Salve, faça commit no GitHub e o Netlify atualiza sozinho.
   ============================================================ */
window.SITE = {
  status: "Em desenvolvimento · versão de teste 6 · Android em breve",
  frase: "Um juramento forjado em cinzas.",
  sobre: "Ashem Vow é um game 2D de ação em pixel art, ambientado num mundo sombrio de guerra, sacrifício e vingança. Escolha entre cinco heróis, cada um com uma habilidade única, e sobreviva a hordas em seis cenários dark fantasy sob uma lua vermelha. A história, Juramento de Cinzas, é contada em cenas narradas e termina com uma escolha sua.",
  recursos: [
    { t: "Cinco heróis", d: "Garrick, Yurinn, Brann, Selka e Orun, cada um com animações próprias e uma habilidade só dele." },
    { t: "Seis cenários", d: "Cada fase tem chão, objetos, música, 10 criaturas e um chefe próprios." },
    { t: "Sem pagar para vencer", d: "Poções têm poder limitado e anúncios são sempre opcionais." }
  ],
  /* Andamento: o que já existe, o que está em produção e o que é planejado. Seja honesto: só coloque em "no teste" o que já roda. */
  andamento: [
    { titulo: "Já no jogo (versão 6)", itens: [
      "5 heróis com animações completas e habilidade própria, banner e retrato oficiais",
      "6 fases com cenário, 10 criaturas e chefe",
      "História em cutscenes narradas, com final de escolha",
      "8 poções temporárias, escolhidas antes da partida",
      "Recompensa diária de 7 dias (faltar um dia só pausa a sequência)",
      "Loja, aba de novidades, trilha e vozes em volumes separados",
      "Anúncios opcionais para ganhar recompensas"
    ]},
    { titulo: "Em produção", itens: [
      "Conectar compras e anúncios reais do Google Play",
      "Trilhas próprias para Floresta, Pântano e Geleira",
      "Ajustes de equilíbrio e testes em celulares reais",
      "Legendas completas nas cenas"
    ]},
    { titulo: "Planejado", itens: [
      "Códigos de resgate com recompensas exclusivas, com conta de login",
      "Perfil de jogador, nick único e ranking global",
      "Recompensa por horas jogadas",
      "Avatares de perfil",
      "Lançamento na Google Play (Android)"
    ]}
  ],
  /* Novas novidades: copie um bloco e coloque no TOPO da lista */
  novidades: [
    { data: "23/10/2026", titulo: "Arte oficial dos cinco heróis", texto: "Cada herói ganhou sua ficha oficial, com retrato, expressões, habilidades e banner de perfil. As skins foram removidas por enquanto: cada herói tem só o visual original. Novos heróis chegam em breve." },
    { data: "20/10/2026", titulo: "Versão 6: a atualização das Cinzas", texto: "Cinco heróis jogáveis (Garrick, Yurinn, Brann, Selka e Orun), cada um com habilidade única. Seis fases, cada uma com cenário, música, 10 criaturas e um chefe." },
    { data: "20/10/2026", titulo: "Juramento de Cinzas: a história em cenas narradas", texto: "Cenas com imagens, narração e música entre as fases, e um final em que você escolhe entre renovar o Selo ou quebrá-lo. Sem spoilers por aqui." },
    { data: "20/10/2026", titulo: "Poções, recompensa diária e loja nova", texto: "Oito poções temporárias para levar à partida, sete dias de recompensa diária (se faltar um dia, a sequência só pausa) e uma loja com heróis, pacotes de cinzas e poções." },
    { data: "20/10/2026", titulo: "Anúncios só se você quiser", texto: "Vídeos servem para ganhar recompensas ou continuar após cair, sempre opcionais. O anúncio de tela cheia é raro, nunca aparece durante a partida e existe a opção de removê-lo." },
    { data: "20/10/2026", titulo: "Novas seções: Personagens, Criaturas e Cenários", texto: "O site agora mostra os heróis, o bestiário de cada fase e os objetos de cada cenário, além de prints do jogo na seção Do projeto." },
    { data: "20/10/2026", titulo: "Em breve: códigos de resgate, perfil e ranking", texto: "Vem aí um código exclusivo com personagem limitado, conta de login, perfil com nick único e ranking global." },
    { data: "17/10/2026", titulo: "Em produção · Novos heróis e habilidades únicas", texto: "Além de Garrick, o jogo vai ganhar Yurinn, a Tecelã de Brasas, Brann, o Sentinela do Selo, Selka, a Lâmina Errante, e Orun, o Coveiro. Cada um com uma habilidade só dele e variações de cor para escolher." },
    { data: "17/10/2026", titulo: "Em produção · Seis cenários e um bestiário para cada um", texto: "Campo de Cinzas, Floresta Morta, Catedral em Ruínas, Pântano de Sangue, Geleira dos Esquecidos e Abismo de Brasas. Cada cenário terá criaturas e um chefe próprios." },
    { data: "17/10/2026", titulo: "Em produção · A história de Ashem Vow", texto: "Um juramento antigo mantém uma fome selada sob uma catedral, e o preço de manter esse juramento é mais alto do que parece. A história será contada em cutscenes, falas e lembranças que o jogador coleciona. Sem spoilers por aqui." },
    { data: "17/10/2026", titulo: "Em produção · Loja redesenhada e poções", texto: "A nova interface da loja está em conceito, com poções de efeito temporário (vida, velocidade, dano, XP e mais). Tudo pensado para não virar pagar para vencer." },
    { data: "17/10/2026", titulo: "Planejado · Anúncios com respeito ao jogador", texto: "Nada de enxurrada de anúncios. Os anúncios serão opcionais, em troca de recompensas, e haverá uma opção para removê-los de vez." },
    { data: "17/10/2026", titulo: "Trilha mais baixa e sons mais suaves", texto: "O jogo terá música imersiva, com volume contido e uma faixa por cenário, feita para ouvir por muito tempo sem cansar." },
    { data: "16/10/2026", titulo: "Teste jogável: personagens maiores e 10 criaturas animadas", texto: "Garrick ficou mais alto, cada criatura ganhou tamanho próprio, os arqueiros passaram a atirar de longe, e há um chefe a cada 3 minutos. Também já estão no teste a loja de skins de herói e de espada, os sons e a trilha." },
    { data: "16/10/2026", titulo: "Bestiário revelado: 10 criaturas de cinzas", texto: "Seis mobs terrestres (Soldado de Cinzas, Lâmina Vivente, Husk de Ossos, Besta de Cinzas, Colosso de Fogo e Arqueiro) e quatro voadores (Corvo da Ruína, Spectro Alado, Serpe Aérea e o chefe Demônio Alado)." },
    { data: "16/10/2026", titulo: "Conheça o Guardião das Cinzas", texto: "A ficha do personagem principal já tem animações de idle, andar, correr, pulo, ataque básico, ataque pesado e habilidades, além de variações de cor da armadura." },
    { data: "15/10/2026", titulo: "O site de Ashem Vow está no ar", texto: "Este é o ponto central para acompanhar o desenvolvimento, ver a arte e apoiar o projeto." },
    { data: "15/10/2026", titulo: "Esqueleto do jogo em construção", texto: "A base do projeto está pronta: movimento, câmera e estrutura das fases." }
  ],
  /* Galeria de artes. Imagens ficam na pasta assets */
  galeria: [
    { img: "assets/logo-ashem-vow.webp", legenda: "Juramento de Cinzas sob a Lua Rubra" },
    { img: "assets/ficha-garrick.webp", legenda: "Ficha oficial, Garrick: Warden of Ashes" },
    { img: "assets/ficha-yurinn.webp", legenda: "Ficha oficial, Yurinn: Ember Weaver" },
    { img: "assets/ficha-brann.webp", legenda: "Ficha oficial, Brann: Sentinel of the Pale Light" },
    { img: "assets/ficha-selka.webp", legenda: "Ficha oficial, Selka: Shadow Dancer" },
    { img: "assets/ficha-orun.webp", legenda: "Ficha oficial, Orun: Gravedigger of Souls" }
  ],

  /* Seção "Do projeto": fotos e prints do desenvolvimento.
     Para adicionar: envie a imagem para assets/ e copie uma linha abaixo (a mais nova no topo). */
  projeto: {
    intro: "Prints do jogo, folhas de arte e conceitos de Ashem Vow. Tudo em andamento e sujeito a mudanças.",
    itens: [
      {"data": "23/10/2026", "img": "assets/print-jogo_garrick.webp", "legenda": "Garrick no Campo de Cinzas, com botões de habilidade"},
      {"data": "23/10/2026", "img": "assets/print-jogo_yurinn.webp", "legenda": "Yurinn na Floresta Morta"},
      {"data": "23/10/2026", "img": "assets/print-jogo_brann.webp", "legenda": "Brann na Catedral em Ruínas"},
      {"data": "23/10/2026", "img": "assets/print-jogo_selka.webp", "legenda": "Selka no Pântano de Sangue"},
      {"data": "23/10/2026", "img": "assets/print-jogo_orun.webp", "legenda": "Orun na Geleira dos Esquecidos"},
      {"data": "23/10/2026", "img": "assets/print-home.webp", "legenda": "Tela inicial"},
      {"data": "23/10/2026", "img": "assets/print-herois.webp", "legenda": "Escolha de heróis"},
      {"data": "23/10/2026", "img": "assets/print-perfil.webp", "legenda": "Perfil do jogador"},
      {"data": "23/10/2026", "img": "assets/print-banner.webp", "legenda": "Escolha do banner do perfil"},
      {"data": "23/10/2026", "img": "assets/print-preparar.webp", "legenda": "Preparar partida: fase e poções"},
      {"data": "23/10/2026", "img": "assets/print-loja.webp", "legenda": "Loja"},
      {"data": "23/10/2026", "img": "assets/print-diario.webp", "legenda": "Recompensa diária"},
      {"data": "23/10/2026", "img": "assets/print-novidades.webp", "legenda": "Aba de novidades dentro do jogo"},
      { data: "17/10/2026", img: "assets/bestiario-campo.webp", legenda: "Bestiário do Campo de Cinzas, versão de trabalho" },
      { data: "16/10/2026", img: "assets/bestiario.webp", legenda: "Bestiário de monstros terrestres e voadores" }
    ]
  },
  /* Personagens, criaturas e cenários: gerados a partir do jogo. Imagens em assets/ */
  personagens: [{"nome": "Garrick", "titulo": "Guardião das Cinzas", "habilidade": "Aura de Brasas", "descricao": "Um círculo de fogo queima quem chega perto e explode de tempos em tempos.", "skins": [{"nome": "Guardião das Cinzas", "img": "assets/p-garrick-padrao.webp"}], "banner": "assets/b-garrick.webp", "habilidades": [{"nome": "Aura de Brasas", "img": "assets/s-garrick-1.webp"}, {"nome": "Corte Ígneo", "img": "assets/s-garrick-2.webp"}, {"nome": "Eclipse de Cinzas", "img": "assets/s-garrick-3.webp"}]}, {"nome": "Yurinn", "titulo": "Tecelã de Brasas", "habilidade": "Fios de Brasa", "descricao": "Tece fios de fogo que perseguem os inimigos mais próximos.", "skins": [{"nome": "Tecelã de Brasas", "img": "assets/p-yurinn-padrao.webp"}], "banner": "assets/b-yurinn.webp", "habilidades": [{"nome": "Fios de Brasa", "img": "assets/s-yurinn-1.webp"}, {"nome": "Casulo", "img": "assets/s-yurinn-2.webp"}, {"nome": "Teia Ardente", "img": "assets/s-yurinn-3.webp"}]}, {"nome": "Brann", "titulo": "Sentinela da Luz Pálida", "habilidade": "Pilares de Luz", "descricao": "Chama colunas de luz sobre os inimigos. Muita vida, passos lentos.", "skins": [{"nome": "Sentinela da Luz Pálida", "img": "assets/p-brann-padrao.webp"}], "banner": "assets/b-brann.webp", "habilidades": [{"nome": "Pilares de Luz", "img": "assets/s-brann-1.webp"}, {"nome": "Selo Sagrado", "img": "assets/s-brann-2.webp"}, {"nome": "Julgamento", "img": "assets/s-brann-3.webp"}]}, {"nome": "Selka", "titulo": "Dançarina das Sombras", "habilidade": "Tempestade de Lâminas", "descricao": "Lâminas giram ao redor dela e cortam tudo no caminho. Rápida e frágil.", "skins": [{"nome": "Dançarina das Sombras", "img": "assets/p-selka-padrao.webp"}], "banner": "assets/b-selka.webp", "habilidades": [{"nome": "Tempestade de Lâminas", "img": "assets/s-selka-1.webp"}, {"nome": "Corrente Voadora", "img": "assets/s-selka-2.webp"}, {"nome": "Ceifa Sombria", "img": "assets/s-selka-3.webp"}]}, {"nome": "Orun", "titulo": "Coveiro das Almas", "habilidade": "Almas Ligadas", "descricao": "Almas libertas caçam os inimigos. Cada abate pode libertar mais uma.", "skins": [{"nome": "Coveiro das Almas", "img": "assets/p-orun-padrao.webp"}], "banner": "assets/b-orun.webp", "habilidades": [{"nome": "Almas Ligadas", "img": "assets/s-orun-1.webp"}, {"nome": "Mão do Coveiro", "img": "assets/s-orun-2.webp"}, {"nome": "Procissão dos Mortos", "img": "assets/s-orun-3.webp"}]}],
  criaturas: [{"fase": "Campo de Cinzas", "criaturas": [{"nome": "Soldado", "img": "assets/c-campo-soldado.webp"}, {"nome": "Husk", "img": "assets/c-campo-husk.webp"}, {"nome": "Besta", "img": "assets/c-campo-besta.webp"}, {"nome": "Corvo", "img": "assets/c-campo-corvo.webp"}, {"nome": "Lâmina", "img": "assets/c-campo-lamina.webp"}, {"nome": "Arqueiro", "img": "assets/c-campo-arqueiro.webp"}, {"nome": "Colosso", "img": "assets/c-campo-colosso.webp"}, {"nome": "Spectro", "img": "assets/c-campo-spectro.webp"}, {"nome": "Serpe", "img": "assets/c-campo-serpe.webp"}, {"nome": "Chefe", "img": "assets/c-campo-demonio.webp"}]}, {"fase": "Floresta Morta", "criaturas": [{"nome": "Soldado", "img": "assets/c-floresta-soldado.webp"}, {"nome": "Husk", "img": "assets/c-floresta-husk.webp"}, {"nome": "Besta", "img": "assets/c-floresta-besta.webp"}, {"nome": "Corvo", "img": "assets/c-floresta-corvo.webp"}, {"nome": "Lâmina", "img": "assets/c-floresta-lamina.webp"}, {"nome": "Arqueiro", "img": "assets/c-floresta-arqueiro.webp"}, {"nome": "Colosso", "img": "assets/c-floresta-colosso.webp"}, {"nome": "Spectro", "img": "assets/c-floresta-spectro.webp"}, {"nome": "Serpe", "img": "assets/c-floresta-serpe.webp"}, {"nome": "Chefe", "img": "assets/c-floresta-demonio.webp"}]}, {"fase": "Catedral em Ruínas", "criaturas": [{"nome": "Soldado", "img": "assets/c-ruinas-soldado.webp"}, {"nome": "Husk", "img": "assets/c-ruinas-husk.webp"}, {"nome": "Besta", "img": "assets/c-ruinas-besta.webp"}, {"nome": "Corvo", "img": "assets/c-ruinas-corvo.webp"}, {"nome": "Lâmina", "img": "assets/c-ruinas-lamina.webp"}, {"nome": "Arqueiro", "img": "assets/c-ruinas-arqueiro.webp"}, {"nome": "Colosso", "img": "assets/c-ruinas-colosso.webp"}, {"nome": "Spectro", "img": "assets/c-ruinas-spectro.webp"}, {"nome": "Serpe", "img": "assets/c-ruinas-serpe.webp"}, {"nome": "Chefe", "img": "assets/c-ruinas-demonio.webp"}]}, {"fase": "Pântano de Sangue", "criaturas": [{"nome": "Soldado", "img": "assets/c-pantano-soldado.webp"}, {"nome": "Husk", "img": "assets/c-pantano-husk.webp"}, {"nome": "Besta", "img": "assets/c-pantano-besta.webp"}, {"nome": "Corvo", "img": "assets/c-pantano-corvo.webp"}, {"nome": "Lâmina", "img": "assets/c-pantano-lamina.webp"}, {"nome": "Arqueiro", "img": "assets/c-pantano-arqueiro.webp"}, {"nome": "Colosso", "img": "assets/c-pantano-colosso.webp"}, {"nome": "Spectro", "img": "assets/c-pantano-spectro.webp"}, {"nome": "Serpe", "img": "assets/c-pantano-serpe.webp"}, {"nome": "Chefe", "img": "assets/c-pantano-demonio.webp"}]}, {"fase": "Geleira dos Esquecidos", "criaturas": [{"nome": "Soldado", "img": "assets/c-gelo-soldado.webp"}, {"nome": "Husk", "img": "assets/c-gelo-husk.webp"}, {"nome": "Besta", "img": "assets/c-gelo-besta.webp"}, {"nome": "Corvo", "img": "assets/c-gelo-corvo.webp"}, {"nome": "Lâmina", "img": "assets/c-gelo-lamina.webp"}, {"nome": "Arqueiro", "img": "assets/c-gelo-arqueiro.webp"}, {"nome": "Colosso", "img": "assets/c-gelo-colosso.webp"}, {"nome": "Spectro", "img": "assets/c-gelo-spectro.webp"}, {"nome": "Serpe", "img": "assets/c-gelo-serpe.webp"}, {"nome": "Chefe", "img": "assets/c-gelo-demonio.webp"}]}, {"fase": "Abismo de Brasas", "criaturas": [{"nome": "Soldado", "img": "assets/c-vulcanica-soldado.webp"}, {"nome": "Husk", "img": "assets/c-vulcanica-husk.webp"}, {"nome": "Besta", "img": "assets/c-vulcanica-besta.webp"}, {"nome": "Corvo", "img": "assets/c-vulcanica-corvo.webp"}, {"nome": "Lâmina", "img": "assets/c-vulcanica-lamina.webp"}, {"nome": "Arqueiro", "img": "assets/c-vulcanica-arqueiro.webp"}, {"nome": "Colosso", "img": "assets/c-vulcanica-colosso.webp"}, {"nome": "Spectro", "img": "assets/c-vulcanica-spectro.webp"}, {"nome": "Serpe", "img": "assets/c-vulcanica-serpe.webp"}, {"nome": "Chefe", "img": "assets/c-vulcanica-demonio.webp"}]}],
  cenarios: [{"fase": "Campo de Cinzas", "chao": "assets/g-campo.webp", "objetos": ["assets/s-campo-0.webp", "assets/s-campo-1.webp", "assets/s-campo-2.webp", "assets/s-campo-3.webp", "assets/s-campo-4.webp", "assets/s-campo-5.webp", "assets/s-campo-6.webp", "assets/s-campo-7.webp"]}, {"fase": "Floresta Morta", "chao": "assets/g-floresta.webp", "objetos": ["assets/s-floresta-0.webp", "assets/s-floresta-1.webp", "assets/s-floresta-2.webp", "assets/s-floresta-3.webp", "assets/s-floresta-4.webp", "assets/s-floresta-5.webp"]}, {"fase": "Catedral em Ruínas", "chao": "assets/g-ruinas.webp", "objetos": ["assets/s-ruinas-0.webp", "assets/s-ruinas-1.webp", "assets/s-ruinas-2.webp", "assets/s-ruinas-3.webp", "assets/s-ruinas-4.webp", "assets/s-ruinas-5.webp"]}, {"fase": "Pântano de Sangue", "chao": "assets/g-pantano.webp", "objetos": ["assets/s-pantano-0.webp", "assets/s-pantano-1.webp", "assets/s-pantano-2.webp", "assets/s-pantano-3.webp", "assets/s-pantano-4.webp"]}, {"fase": "Geleira dos Esquecidos", "chao": "assets/g-gelo.webp", "objetos": ["assets/s-gelo-0.webp", "assets/s-gelo-1.webp", "assets/s-gelo-2.webp", "assets/s-gelo-3.webp", "assets/s-gelo-4.webp"]}, {"fase": "Abismo de Brasas", "chao": "assets/g-vulcanica.webp", "objetos": ["assets/s-vulcanica-0.webp", "assets/s-vulcanica-1.webp", "assets/s-vulcanica-2.webp", "assets/s-vulcanica-3.webp"]}],
  criador: {
    nome: "Teecki",
    bio: "Desenvolvedor independente criando Ashem Vow do zero, sozinho. Cada apoio ajuda a transformar o esqueleto em jogo.",
    email: "ashemvow@gmail.com"
  },
  instagram: "https://www.instagram.com/ashemvow",
  pix: { chave: "luam.fabiooo@gmail.com", tipo: "E-mail" },
  livepix: "https://widget.livepix.gg/embed/a1b0d7d2-c4c8-4188-8626-e40d5bfd5896",
  /* Anúncios: preencha com os dados do Google AdSense quando aprovado. Vazio = espaço reservado. */
  anuncios: { client: "ca-pub-4655197030235579", slot: "" }
};
