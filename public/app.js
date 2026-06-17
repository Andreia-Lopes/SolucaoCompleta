const infos = {
  cards: [
    { 
      id: 1 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/Australia.png", 
      titulo: "Austrália", 
      situado: "📍 Albert Park, Melbourne", 
      extensao: 5.303, 
      texto: "Primeira corrida da temporada<br>Número de voltas: 58zn<br>Distância total: 306,124 kmzn<br>Número de curvas: 14<br>Recorde da pista: 1:15.096 — Lando Norris(2025)<br>Tipo: circuito urbano temporário<br>Condições típicas: clima instável e alta chance de Safety Car<br><br>Albert Park abriu oficialmente a temporada 2026 da Fórmula 1, marcando o início do novo regulamento técnico da categoria, com mudanças aerodinâmicas, motores sustentáveis e novos modos de gerenciamento de energia.<br><br>Resultado da corrida 2026<br>🥇 George Russell — Mercedes<br>🥈 Kimi Antonelli — Mercedes<br>🥉 Lando Norris — McLaren",
      estilo: "cardjsGPs"
    },
    {
      id: 2 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/China Shanghai.jpg", 
      titulo: "China", 
      situado: "📍 Shanghai, China", 
      extensao: 5.451, 
      texto: "Segunda etapa da temporada<br>Número de voltas: 56<br>Distância total: 305,066 km<br>Número de curvas: 16<br>Recorde da pista: 1:32.238 — Michael Schumacher (2004)<br>Tipo: circuito permanente<br>Condições típicas: pista fria e alta degradação dos pneus dianteiros<br><br>Conhecido pela longa reta traseira e curvas em espiral inspiradas no caractere chinês “shang”.<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli — Mercedes<br>🥈George Russell — Mercedes<br>🥉 Lewis Hamilton — Ferrari",
      estilo: "cardjsGPs"
    },
    {
      id: 3 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/Japão.jpg", 
      titulo: "Japão", 
      situado: "📍 Suzuka, Japão", 
      extensao: 5.807, 
      texto: "Terceira etapa da temporada<br>Número de voltas: 53<br>Distância total: 307,471 km<br>Número de curvas: 18<br>Recorde da pista: 1:30.965 — Kimi Antonelli (2025)<br>Tipo: circuito permanente<br>Condições típicas: clima imprevisível e risco de chuva<br><br>Suzuka é o único circuito da F1 em formato de “8” e um dos mais técnicos do calendário.<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli — Mercedes<br>🥈 Oscar Piastri — McLaren<br>🥉 Charles Leclerc — Ferrari",
      estilo: "cardjsGPs"
    },
    {
      id: 4 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/Bahein.jpg", 
      titulo: "Bahein", 
      situado: "📍 Sakhir, Bahrein", 
      extensao: 5.412, 
      texto: "Número de voltas: 57<br>Distância total: 308,238 km<br>Número de curvas: 15<br>Recorde da pista: 1:31.447 — Pedro de la Rosa (2005)<br>Tipo: circuito permanente<br>Condições típicas: calor intenso e areia na pista<br><br>O Bahrein costuma gerar corridas estratégicas devido ao desgaste elevado dos pneus. Devido ",
      estilo: "cardjsGPs"
    },
    {
      id: 5 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/Jeddah.jpg", 
      titulo: "Jeddah", 
      situado: "📍 Jeddah, Arábia Saudita", 
      extensao: 5.154, 
      texto: "Número de voltas: 50<br>Distância total: 308,450 km<br>Número de curvas: 27<br>Recorde da pista: 1:30.734 — Lewis Hamilton (2021)<br>Tipo: circuito urbano ultrarrápido<br>Condições típicas: corrida noturna e Safety Cars frequentes<br><br>Jeddah é um dos circuitos mais rápidos da história entre os urbanos.",
      estilo: "cardjsGPs"
    },
    {
      id: 6 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/Miami.jpg", 
      titulo: "Miami", 
      situado: "📍 Miami, Estados Unidos", 
      extensao: 5.412, 
      texto: "Sexta etapa da temporada<br>Número de voltas: 57<br>Distância total: 308,326 km<br>Número de curvas: 19<br>Recorde da pista: 1:29.708 — Max Verstappen (2023)<br>Tipo: circuito semipermanente<br>Condições típicas: calor elevado e alta umidade<br><br>O traçado mistura retas longas com setores travados e lentos.<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli - Mercedes<br>🥈 Lando Norris — McLaren<br>🥉 Oscar Piastri — McLaren",
      estilo: "cardjsGPs"
    },
    {
      id: 7 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/Canada.jpg", 
      titulo: "Canadá", 
      situado: "📍 Montreal, Canadá", 
      extensao: 4.361, 
      texto: "Sétima etapa da temporada<br>Número de voltas: 68<br>Distância total: 305.27 km<br>Número de curvas: 14<br>Recorde da pista: 1:12.909 — Valteri Bottas (2019)<br>Tipo: circuito urbano<br>Condições típicas: classificação decisiva e poucas ultrapassagens<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli<br>🥈 Lewis Hamilton — Ferrari<br>🥉 Max Verstappen — Red Bull",
      estilo: "cardjsGPs"
    },
    {
      id: 8 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "img/Monaco.jpg", 
      titulo: "Mônaco", 
      situado: "📍 Monte Carlo, Mônaco", 
      extensao: 3.337, 
      texto: "Oitava etapa da temporada<br>Número de voltas: 78<br>Distância total: 260,286 km<br>Número de curvas: 19<br>Recorde da pista: 1:12.909 — Lewis Hamilton (2021)<br>Tipo: circuito urbano histórico<br>Condições típicas: classificação decisiva e poucas ultrapassagens<br><br>Mônaco continua sendo o circuito mais tradicional e prestigiado da Fórmula 1.",
      estilo: "cardjsGPs"
    },
    {
      id: 9 ,
      noticia: ["Equipes"],
      imagem: "img/Mercedes f1 Team.jpg",
      titulo: "Mercedes-AMG Petronas Formula One Team",
      situado: "📍 Base: Brackley, Reino Unido",
      motor: "⚙️ Motor: Mercedes",
      texto: "Chefia: Toto Wolff<br>Títulos de construtores: 8<br>Último título: 2021<br>Pilotos 2026:<br>George Russell<br>Kimi Antonelli<br>Entrada na F1: 2010<br>Tipo: equipe oficial de fábrica<br><br>A Mercedes iniciou 2026 muito forte após a introdução do novo regulamento técnico, sendo considerada uma das favoritas ao título.<br>Resultados recentes 2026<br>Vitórias: 3<br>Pódios: 8<br>Poles: 4",
      estilo: "cardjsMerc"
      },
    {
        id: 10 ,
        noticia: ["Equipes"],
        imagem: "img/Ferrari.jpg",
        titulo: "Scuderia Ferrari HP",
        situado: "📍 Base: Maranello, Itália",
        motor: "⚙️ Motor: Ferrari",
        texto: "Chefia: Frédéric Vasseur<br>Títulos de construtores: 16<br>Último título: 2008<br>Pilotos 2026:<br>Lewis Hamilton <br>Charles Leclerc<br>Entrada na F1: 1950<br>Tipo: equipe histórica de fábrica<br><br>A Ferrari chega em 2026 tentando voltar ao topo da Fórmula 1 com Hamilton e Leclerc formando uma das duplas mais fortes do grid.",
        estilo:"cardjFer"
      },
    {
        id: 11 ,
        noticia: ["Equipes"],
        imagem: "img/Mclaren.jpg",
        titulo: "McLaren Mastercard F1 Team",
        situado: "📍 Base: Woking, Inglaterra",
        motor: "⚙️ Motor: Mercedes",
        texto: "Chefia: Andrea Stella<br>Títulos de construtores: 10<br>Último título: 2025<br>Pilotos 2026:<br>Lando Norris<br>Oscar Piastri<br>Patrocinador master: Mastercard<br>Entrada na F1: 1966<br><br>Tipo: equipe histórica independente<br>A McLaren vive uma fase extremamente forte e chega como uma das favoritas após temporadas muito competitivas.",
        estilo: "cardjsMc"
    },
    {
        id: 12 ,
        noticia: ["Equipes"],
        imagem: "img/Red Bull Racing.jpg",
        titulo: "Oracle Red Bull Racing",
        situado: "📍 Base: Milton Keynes, Inglaterra",
        motor: "⚙️ Motor: Ford Red Bull",
        texto: "Chefia: Laurent Mekies<br>Títulos de construtores: 6<br> Último título: 2023<br>Pilotos 2026:<br>Max Verstappen<br>Isack Hadjar<br>Patrocinador master: Oracle<br>Entrada na F1: 2005<br>Tipo: equipe de fábrica parceria<br><br>Mesmo após mudanças internas, a Red Bull continua fortíssima graças ao talento de Verstappen e ao novo projeto com a Ford.",
        estilo: "cardjsRB"
      }
  ]
};

const carrossel = document.getElementById("carouselExampleCaptions");
const itens = document.getElementById("itens-card");
const detalhes = document.getElementById("detalhes-card");

function renderCards(cards) {
  if (!itens) return;
  itens.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const item = cards[i];
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3";
    col.innerHTML = 
      `<a href="detalhes.html?id=${item.id}" class="text-decoration-none">
        <div class="card h-85 ${item.estilo} p-3">
          <img src="${item.imagem}" alt="${item.titulo}" class="card-img-top">
          <div class="card-body">
            <h6 class="card-title">${item.titulo}</h6>
            <p class="card-text">${item.texto.substring(0, 40)}...</p>
          </div>
        </div>
      </a>`;
    itens.appendChild(col);
  }
}

function renderCardsRelacionados(cards, container, itemAtual) {
  container.innerHTML = "";
  for (let i = 0; i < cards.length; i++) {
    const item = cards[i];
    if (item === itemAtual) continue;
    const col = document.createElement("div");
    col.className = "col-12 col-md-6 col-lg-3";
    col.innerHTML = 
      `<a href="detalhes.html?id=${item.id}" class="text-decoration-none">
        <div class="card h-85 ${item.estilo} p-3">
          <img src="${item.imagem}" alt="${item.titulo}" class="card-img-top">
          <div class="card-body">
            <h6 class="card-title">${item.titulo}</h6>
            <p class="card-text">${item.texto.substring(0, 40)}...</p>
          </div>
        </div>
      </a>`;
    container.appendChild(col);
  }
}

function renderDetalhes() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const item = infos.cards.find(c => String(c.id) === id);
  detalhes.innerHTML = 
    `<h1 class="linhaObrigatoria ms-md-5 mb-md-4">Informações gerais (entidade principal)</h1>
    <div class="row py-4 mb-4 h-85 ${item.estilo} p-3">
      <div class="col-md-4">
        <img src="${item.imagem}" alt="${item.titulo}" class="img-fluid rounded-3">
      </div>
      <div class="col-md-8">
        <h3>${item.titulo}</h3>
        <p>${item.situado || ""}</p>
        ${item.extensao ? `<p>🏎️ ${item.extensao} km</p>` : `<p>${item.motor}</p>`}
        <p>${item.texto}</p>
      </div>
    </div>
    <h1 class="linhaObrigatoria ms-md-5 mb-md-4">Fotos e Item associados (entidade secundaria)</h1>
    <div class="row g-3" id="cards-relacionados"></div>`;
  renderCardsRelacionados(infos.cards, document.getElementById("cards-relacionados"), item);
}

if (carrossel) {
  carrossel.addEventListener("click", (e) => {
    if (e.target.closest(".carousel-control-prev") || e.target.closest(".carousel-control-next")) 
      return;
    const slideAtivo = carrossel.querySelector(".carousel-item.active");
    const id = slideAtivo.dataset.id;
    if (id) 
      window.location.href = `detalhes.html?id=${id}`;
  });
}
if (itens) 
  renderCards(infos.cards);
if (detalhes) 
  renderDetalhes();