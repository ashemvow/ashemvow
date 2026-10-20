const S = window.SITE, $ = id => document.getElementById(id);
const el = (t, c, h) => { const e = document.createElement(t); if (c) e.className = c; if (h) e.innerHTML = h; return e; };
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

$("status").textContent = S.status; $("frase").textContent = S.frase; $("sobre").textContent = S.sobre;
$("news").append(...S.novidades.map(n => el("article", "", `<time>${esc(n.data)}</time><h3>${esc(n.titulo)}</h3><p>${esc(n.texto)}</p>`)));
$("andamento-itens").append(...S.andamento.map(g => el("div", "", `<h3>${esc(g.titulo)}</h3><ul>${g.itens.map(i => `<li>${esc(i)}</li>`).join("")}</ul>`)));
$("recursos").append(...S.recursos.map(r => el("div", "", `<h3>${esc(r.t)}</h3><p>${esc(r.d)}</p>`)));

const lb = el("div"); lb.id = "lb"; lb.innerHTML = "<img alt=''>"; document.body.append(lb);
lb.onclick = () => lb.classList.remove("on");
const card = g => {
  const f = el("figure", "", `<img src="${esc(g.img)}" alt="${esc(g.legenda)}" loading="lazy"><figcaption>${g.data ? `<time>${esc(g.data)}</time>` : ""}${esc(g.legenda)}</figcaption>`);
  f.onclick = () => { lb.querySelector("img").src = g.img; lb.classList.add("on"); };
  return f;
};
addEventListener("keydown", e => { if (e.key === "Escape") lb.classList.remove("on"); });
const zoom = src => { lb.querySelector("img").src = src; lb.classList.add("on"); };
$("personagens-itens").append(...S.personagens.map(p => {
  const d = el("article", "heroi", `<img class="hp" src="${esc(p.skins[0].img)}" alt="${esc(p.nome)}, ${esc(p.titulo)}" loading="lazy"><div><h3>${esc(p.nome)}</h3><p class="tit">${esc(p.titulo)}</p><p><b>${esc(p.habilidade)}.</b> ${esc(p.descricao)}</p><div class="skins"></div></div>`);
  const main = d.querySelector(".hp"), box = d.querySelector(".skins");
  p.skins.forEach((s, i) => {
    const b = el("button", i ? "" : "on", `<img src="${esc(s.img)}" alt="" loading="lazy"><span>${esc(s.nome)}</span>`);
    b.onclick = () => { main.src = s.img; box.querySelectorAll("button").forEach(x => x.classList.remove("on")); b.classList.add("on"); };
    box.append(b);
  });
  main.onclick = () => zoom(main.src);
  return d;
}));
const abas = (idAbas, idBox, lista, render) => {
  const ab = $(idAbas), bx = $(idBox);
  lista.forEach((f, i) => { const b = el("button", i ? "" : "on", esc(f.fase)); b.onclick = () => { ab.querySelectorAll("button").forEach(x => x.classList.remove("on")); b.classList.add("on"); bx.replaceChildren(...render(f)); }; ab.append(b); });
  bx.replaceChildren(...render(lista[0]));
};
abas("criaturas-abas", "criaturas-itens", S.criaturas, f => f.criaturas.map(c => { const e = el("figure", "", `<img src="${esc(c.img)}" alt="${esc(c.nome)}" loading="lazy"><figcaption>${esc(c.nome)}</figcaption>`); e.onclick = () => zoom(c.img); return e; }));
abas("cenarios-abas", "cenarios-itens", S.cenarios, f => [el("figure", "chao", `<img src="${esc(f.chao)}" alt="Chão de ${esc(f.fase)}" loading="lazy"><figcaption>Chão</figcaption>`), ...f.objetos.map(o => { const e = el("figure", "", `<img src="${esc(o)}" alt="Objeto de cenário" loading="lazy">`); e.onclick = () => zoom(o); return e; })]);
$("galeria-itens").append(...S.galeria.map(card));
$("projeto-intro").textContent = S.projeto.intro;
$("projeto-itens").append(...(S.projeto.itens.length ? S.projeto.itens.map(card) : [el("p", "lead", "Fotos do projeto em breve.")]));

$("pix-tipo").textContent = S.pix.tipo; $("pix-chave").textContent = S.pix.chave;
$("livepix").src = S.livepix;
$("copiar").onclick = async () => {
  try { await navigator.clipboard.writeText(S.pix.chave); $("copiado").textContent = "Chave copiada. Obrigado pelo apoio!"; }
  catch { $("copiado").textContent = "Não foi possível copiar. Selecione a chave manualmente."; }
};

$("c-nome").textContent = S.criador.nome; $("c-bio").textContent = S.criador.bio; $("f-nome").textContent = S.criador.nome;
$("c-email").href = "mailto:" + S.criador.email; $("c-email").textContent = S.criador.email;
$("c-insta").href = S.instagram; $("ano").textContent = new Date().getFullYear();

/* Anúncios */
document.querySelectorAll("[data-ad]").forEach(d => {
  if (S.anuncios.client && S.anuncios.slot) {
    d.innerHTML = `<ins class="adsbygoogle" style="display:block" data-ad-client="${esc(S.anuncios.client)}" data-ad-slot="${esc(S.anuncios.slot)}" data-ad-format="auto" data-full-width-responsive="true"></ins>`;
  } else d.innerHTML = '<div class="slot">Espaço publicitário</div>';
});
if (S.anuncios.client && S.anuncios.slot) {
  const s = el("script"); s.async = true; s.crossOrigin = "anonymous";
  s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + S.anuncios.client;
  document.head.append(s);
  s.onload = () => document.querySelectorAll(".adsbygoogle").forEach(() => (window.adsbygoogle = window.adsbygoogle || []).push({}));
}

/* Brasas */
if (!matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const c = $("embers"), x = c.getContext("2d"); let p = [];
  const fit = () => { c.width = innerWidth; c.height = innerHeight; }; fit(); addEventListener("resize", fit);
  const mk = () => ({ x: Math.random() * c.width, y: c.height + 10, r: Math.random() * 2 + .5, v: Math.random() * .8 + .3, d: Math.random() * 2 - 1 });
  for (let i = 0; i < 50; i++) { const e = mk(); e.y = Math.random() * c.height; p.push(e); }
  (function t() {
    x.clearRect(0, 0, c.width, c.height);
    p.forEach((e, i) => { e.y -= e.v; e.x += Math.sin(e.y / 40) * .4 + e.d * .1; if (e.y < -10) p[i] = mk();
      x.fillStyle = `rgba(230,120,40,${Math.min(1, e.y / c.height + .1) * .7})`; x.beginPath(); x.arc(e.x, e.y, e.r, 0, 7); x.fill(); });
    requestAnimationFrame(t);
  })();
}
