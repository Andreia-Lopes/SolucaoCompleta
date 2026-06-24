const infos = [
    { 
      id: 1 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/Australia.png", 
      titulo: "Austrália", 
      situado: "📍 Albert Park, Melbourne", 
      extensao: 5.303, 
      texto: "Primeira corrida da temporada<br>Número de voltas: 58zn<br>Distância total: 306,124 kmzn<br>Número de curvas: 14<br>Recorde da pista: 1:15.096 — Lando Norris(2025)<br>Tipo: circuito urbano temporário<br>Condições típicas: clima instável e alta chance de Safety Car<br><br>Albert Park abriu oficialmente a temporada 2026 da Fórmula 1, marcando o início do novo regulamento técnico da categoria, com mudanças aerodinâmicas, motores sustentáveis e novos modos de gerenciamento de energia.<br><br>Resultado da corrida 2026<br>🥇 George Russell — Mercedes<br>🥈 Kimi Antonelli — Mercedes<br>🥉 Lando Norris — McLaren",
      destaque: true,
      estilo: "cardjsGPs"
    },
    {
      id: 2 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/China Shanghai.jpg", 
      titulo: "China", 
      situado: "📍 Shanghai, China", 
      extensao: 5.451, 
      texto: "Segunda etapa da temporada<br>Número de voltas: 56<br>Distância total: 305,066 km<br>Número de curvas: 16<br>Recorde da pista: 1:32.238 — Michael Schumacher (2004)<br>Tipo: circuito permanente<br>Condições típicas: pista fria e alta degradação dos pneus dianteiros<br><br>Conhecido pela longa reta traseira e curvas em espiral inspiradas no caractere chinês “shang”.<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli — Mercedes<br>🥈George Russell — Mercedes<br>🥉 Lewis Hamilton — Ferrari",
      destaque: false,
      estilo: "cardjsGPs"
    },
    {
      id: 3 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/Japão.jpg", 
      titulo: "Japão", 
      situado: "📍 Suzuka, Japão", 
      extensao: 5.807, 
      texto: "Terceira etapa da temporada<br>Número de voltas: 53<br>Distância total: 307,471 km<br>Número de curvas: 18<br>Recorde da pista: 1:30.965 — Kimi Antonelli (2025)<br>Tipo: circuito permanente<br>Condições típicas: clima imprevisível e risco de chuva<br><br>Suzuka é o único circuito da F1 em formato de “8” e um dos mais técnicos do calendário.<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli — Mercedes<br>🥈 Oscar Piastri — McLaren<br>🥉 Charles Leclerc — Ferrari",
      destaque: false,
      estilo: "cardjsGPs"
    },
    {
      id: 4 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/Bahein.jpg", 
      titulo: "Bahein", 
      situado: "📍 Sakhir, Bahrein", 
      extensao: 5.412, 
      texto: "Número de voltas: 57<br>Distância total: 308,238 km<br>Número de curvas: 15<br>Recorde da pista: 1:31.447 — Pedro de la Rosa (2005)<br>Tipo: circuito permanente<br>Condições típicas: calor intenso e areia na pista<br><br>O Bahrein costuma gerar corridas estratégicas devido ao desgaste elevado dos pneus. Devido ",
      destaque: false,
      estilo: "cardjsGPs"
    },
    {
      id: 5 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/Jeddah.jpg", 
      titulo: "Jeddah", 
      situado: "📍 Jeddah, Arábia Saudita", 
      extensao: 5.154, 
      texto: "Número de voltas: 50<br>Distância total: 308,450 km<br>Número de curvas: 27<br>Recorde da pista: 1:30.734 — Lewis Hamilton (2021)<br>Tipo: circuito urbano ultrarrápido<br>Condições típicas: corrida noturna e Safety Cars frequentes<br><br>Jeddah é um dos circuitos mais rápidos da história entre os urbanos.",
      destaque: false,
      estilo: "cardjsGPs"
    },
    {
      id: 6 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/Miami.jpg", 
      titulo: "Miami", 
      situado: "📍 Miami, Estados Unidos", 
      extensao: 5.412, 
      texto: "Sexta etapa da temporada<br>Número de voltas: 57<br>Distância total: 308,326 km<br>Número de curvas: 19<br>Recorde da pista: 1:29.708 — Max Verstappen (2023)<br>Tipo: circuito semipermanente<br>Condições típicas: calor elevado e alta umidade<br><br>O traçado mistura retas longas com setores travados e lentos.<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli - Mercedes<br>🥈 Lando Norris — McLaren<br>🥉 Oscar Piastri — McLaren",
      destaque: false,
      estilo: "cardjsGPs"
    },
    {
      id: 7 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/Canada.jpg", 
      titulo: "Canadá", 
      situado: "📍 Montreal, Canadá", 
      extensao: 4.361, 
      texto: "Sétima etapa da temporada<br>Número de voltas: 68<br>Distância total: 305.27 km<br>Número de curvas: 14<br>Recorde da pista: 1:12.909 — Valteri Bottas (2019)<br>Tipo: circuito urbano<br>Condições típicas: classificação decisiva e poucas ultrapassagens<br><br>Resultado da corrida 2026<br>🥇 Kimi Antonelli<br>🥈 Lewis Hamilton — Ferrari<br>🥉 Max Verstappen — Red Bull",
      destaque: false,
      estilo: "cardjsGPs"
    },
    {
      id: 8 ,
      noticia: ["Grandes Prêmios"], 
      imagem: "assets/img/Monaco.jpg", 
      titulo: "Mônaco", 
      situado: "📍 Monte Carlo, Mônaco", 
      extensao: 3.337, 
      texto: "Oitava etapa da temporada<br>Número de voltas: 78<br>Distância total: 260,286 km<br>Número de curvas: 19<br>Recorde da pista: 1:12.909 — Lewis Hamilton (2021)<br>Tipo: circuito urbano histórico<br>Condições típicas: classificação decisiva e poucas ultrapassagens<br><br>Mônaco continua sendo o circuito mais tradicional e prestigiado da Fórmula 1.",
      destaque: true,
      estilo: "cardjsGPs"
    },
    {
      id: 9 ,
      noticia: ["Equipes"],
      imagem: "assets/img/Mercedes f1 Team.jpg",
      titulo: "Mercedes-AMG Petronas Formula One Team",
      situado: "📍 Base: Brackley, Reino Unido",
      motor: "⚙️ Motor: Mercedes",
      texto: "Chefia: Toto Wolff<br>Títulos de construtores: 8<br>Último título: 2021<br>Pilotos 2026:<br>George Russell<br>Kimi Antonelli<br>Entrada na F1: 2010<br>Tipo: equipe oficial de fábrica<br><br>A Mercedes iniciou 2026 muito forte após a introdução do novo regulamento técnico, sendo considerada uma das favoritas ao título.<br>Resultados recentes 2026<br>Vitórias: 3<br>Pódios: 8<br>Poles: 4",
      destaque: false,
      estilo: "cardjsMerc"
      },
    {
        id: 10 ,
        noticia: ["Equipes"],
        imagem: "assets/img/Ferrari.jpg",
        titulo: "Scuderia Ferrari HP",
        situado: "📍 Base: Maranello, Itália",
        motor: "⚙️ Motor: Ferrari",
        texto: "Chefia: Frédéric Vasseur<br>Títulos de construtores: 16<br>Último título: 2008<br>Pilotos 2026:<br>Lewis Hamilton <br>Charles Leclerc<br>Entrada na F1: 1950<br>Tipo: equipe histórica de fábrica<br><br>A Ferrari chega em 2026 tentando voltar ao topo da Fórmula 1 com Hamilton e Leclerc formando uma das duplas mais fortes do grid.",
        destaque: false,
        estilo:"cardjFer"
      },
    {
        id: 11 ,
        noticia: ["Equipes"],
        imagem: "assets/img/Mclaren.jpg",
        titulo: "McLaren Mastercard F1 Team",
        situado: "📍 Base: Woking, Inglaterra",
        motor: "⚙️ Motor: Mercedes",
        texto: "Chefia: Andrea Stella<br>Títulos de construtores: 10<br>Último título: 2025<br>Pilotos 2026:<br>Lando Norris<br>Oscar Piastri<br>Patrocinador master: Mastercard<br>Entrada na F1: 1966<br><br>Tipo: equipe histórica independente<br>A McLaren vive uma fase extremamente forte e chega como uma das favoritas após temporadas muito competitivas.",
        destaque: false,
        estilo: "cardjsMc"
    },
    {
        id: 12 ,
        noticia: ["Equipes"],
        imagem: "assets/img/Red Bull Racing.jpg",
        titulo: "Oracle Red Bull Racing",
        situado: "📍 Base: Milton Keynes, Inglaterra",
        motor: "⚙️ Motor: Ford Red Bull",
        texto: "Chefia: Laurent Mekies<br>Títulos de construtores: 6<br> Último título: 2023<br>Pilotos 2026:<br>Max Verstappen<br>Isack Hadjar<br>Patrocinador master: Oracle<br>Entrada na F1: 2005<br>Tipo: equipe de fábrica parceria<br><br>Mesmo após mudanças internas, a Red Bull continua fortíssima graças ao talento de Verstappen e ao novo projeto com a Ford.",
        destaque: true,
        estilo: "cardjsRB"
      }
  ];
const users = [
  { 
    id: "187cb7e5-e097-4224-8bc7-b610c855e2b1", 
    login: "admin", 
    senha: "123", 
    nome: "Administrador do Sistema", 
    email: "admin@abc.com", 
    admin: true 
  },
  { 
    id: "ec37c83d-4b7f-458d-9e10-3fda7d37cd3e", 
    login: "user", 
    senha: "123", 
    nome: "Usuário Comum", 
    email: "user@abc.com", 
    admin: false }
];
//
function criarGravaDados() {
  const itensSalvos = JSON.parse(localStorage.getItem("itens"));
  if (!Array.isArray(itensSalvos)) 
    {
      localStorage.setItem("itens", JSON.stringify(infos));
    }
  if (!localStorage.getItem("usuarios")) 
    localStorage.setItem("usuarios", JSON.stringify(users));
  if (!localStorage.getItem("favoritos")) 
    localStorage.setItem("favoritos", JSON.stringify({}));
}
criarGravaDados();
//
function getItens() {
  const dados = JSON.parse(localStorage.getItem("itens"));
  return Array.isArray(dados) ? dados : [];
}
function salvarItens(itens) {// sobrescreve no LocalStorage
  localStorage.setItem("itens", JSON.stringify(itens)); 
}
function getItemPorId(id) { // procura pelo id que corresponde ao id informado
  return getItens().find(function (i) { return Number(i.id) === Number(id); }); 
}
//
function getUsuarios() { 
  return JSON.parse(localStorage.getItem("usuarios")) || []; 
}
function salvarUsuarios(usuarios) { 
  localStorage.setItem("usuarios", JSON.stringify(usuarios)); // recebe o array de usuários e sobreescreve no LocalStorage
}
//
function getUsuarioLogado() {
  const dados = sessionStorage.getItem("usuarioLogado");
  return dados ? JSON.parse(dados) : null; // Se algo salvo, converte de texto JSON para objeto; senão, devolve null
}
function definirUsuarioLogado(usuario) { 
  sessionStorage.setItem("usuarioLogado", JSON.stringify(usuario)); 
}
function logout() { 
  sessionStorage.removeItem("usuarioLogado"); 
  window.location.href = "index.html"; 
}
// Favoritos
function getFavoritos() { 
  return JSON.parse(localStorage.getItem("favoritos")) || {}; 
}
function salvarFavoritos(favoritos) { 
  localStorage.setItem("favoritos", JSON.stringify(favoritos)); 
}
function getFavoritosDoUsuario(usuarioId) { 
  return getFavoritos()[usuarioId] || []; // Retorna uma lista de ids favoritados por um usuário específico (ou array vazio)
}
function isFavorito(usuarioId, itemId) {
  if (!usuarioId) // se não tem usuário logado não reorna falso direto
    return false;
  return getFavoritosDoUsuario(usuarioId).some(function (id) { return Number(id) === Number(itemId); }); // Procura, na lista de favoritos do usuário, algum id igual ao itemId informado
}
function toggleFavorito(usuarioId, itemId) { // Muda o estado de favorito de um item
  const favoritos = getFavoritos();
  const lista = favoritos[usuarioId] || [];
  const indice = lista.findIndex(function (id) { return Number(id) === Number(itemId); });
  if (indice >= 0) 
    lista.splice(indice, 1); 
  else 
    lista.push(itemId);
  favoritos[usuarioId] = lista;

  salvarFavoritos(favoritos);
}
// Menu
function atualizarMenu() { //atualiza a visibilidade dos links do menu
  const usuario = getUsuarioLogado();
  document.querySelectorAll(".linkAdmin").forEach(function (el) { el.classList.toggle("d-none", !usuario || !usuario.admin); });
  document.querySelectorAll(".linkFavoritos").forEach(function (el) { el.classList.toggle("d-none", !usuario); });
  document.querySelectorAll(".linkLoginBtn").forEach(function (el) { el.classList.toggle("d-none", !!usuario); });
  document.querySelectorAll(".linkLogout").forEach(function (el) { el.classList.toggle("d-none", !usuario); });
}

document.addEventListener("DOMContentLoaded", function () {

  atualizarMenu();
  const btnLogout = document.getElementById("btnLogout");
  if (btnLogout) 
    btnLogout.addEventListener("click", function (e) { e.preventDefault(); logout(); });

  if (document.getElementById("itens-card")) 
    iniciarHome();
  if (document.getElementById("detalhes-card")) 
    iniciarDetalhes();
  if (document.getElementById("favoritos-card")) 
    iniciarFavoritos();
  if (document.getElementById("formItem")) 
    iniciarCadastroItens();
});

function resumir(texto, tamanho) {
  return texto.length > tamanho ? texto.substring(0, tamanho).trim() + "..." : texto;
}

function montarCard(item, usuario) {
  const favoritado = isFavorito(usuario && usuario.id, item.id);
  const coracao = usuario
    ? '<button type="button" class="btn-favorito ' + (favoritado ? "favoritado" : "") + '" data-id="' + item.id + '">' + (favoritado ? "♥" : "♡") + "</button>"
    : "";
  const col = document.createElement("div");
  col.className = "col-12 col-md-6 col-lg-4";
  col.innerHTML =
    '<div class="card-item position-relative">' +
      coracao +
      '<a href="detalhes.html?id=' + item.id + '" class="text-decoration-none">' +
        '<img src="' + item.imagem + '" alt="' + item.titulo + '" class="card-img-top">' +
        '<div class="card-body">' +
          "<h6>" + item.titulo + "</h6>" +
          "<p>" + resumir(item.texto, 70) + "</p>" +
        "</div>" +
      "</a>" +
    "</div>";
  return col;
}

function ativarBotoesFavorito(container, aoMudar) {
  container.querySelectorAll(".btn-favorito").forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      const usuarioAtual = getUsuarioLogado(); // procura o usuário logado no momento do clique
      if (!usuarioAtual) 
        { 
          window.location.href = "login.html"; 
          return; 
        }

      toggleFavorito(usuarioAtual.id, Number(this.dataset.id));
      aoMudar();
    });
  });
}
// Home 
function itensFiltrados() {
  const campo = document.getElementById("campoPesquisa");
  const termo = campo ? campo.value.trim().toLowerCase() : ""; // Lê o texto digitado, em minúsculas e sem espaços nas pontas; vazio se o campo não existir
  const itens = getItens();
  if (!termo) 
    return itens;
  return itens.filter(function (item) { // Filtra os itens cujo título OU descrição contenham o termo pesquisado
    return item.titulo.toLowerCase().includes(termo) || item.texto.toLowerCase().includes(termo);
  });
}

function renderCards() {
  const usuario = getUsuarioLogado();
  const container = document.getElementById("itens-card");
  const itens = itensFiltrados();

  container.innerHTML = itens.length ? "" : '<p class="text-light text-center w-100 mt-4">Nenhum item encontrado para a pesquisa informada.</p>';
  itens.forEach(function (item) {
    container.appendChild(montarCard(item, usuario)); 
  });

  ativarBotoesFavorito(container, renderCards);
}

function renderCarrossel() {
  const inner = document.querySelector("#carrossel .carousel-inner");
  const indicadores = document.querySelector("#carrossel .carousel-indicators");
  const destaques = getItens().filter(function (item) { return item.destaque; });

  inner.innerHTML = ""; // Limpa os slides existentes
  indicadores.innerHTML = "";

  destaques.forEach(function (item, i) {
    indicadores.insertAdjacentHTML("beforeend",
      '<button type="button" data-bs-target="#carrossel" data-bs-slide-to="' + i + '" class="' + (i === 0 ? "active" : "") + '"></button>');
    inner.insertAdjacentHTML("beforeend",
      '<div class="carousel-item ' + (i === 0 ? "active" : "") + '" data-id="' + item.id + '">' +
        '<a href="detalhes.html?id=' + item.id + '"><img src="' + item.imagem + '" class="d-block w-100 rounded-3" alt="' + item.titulo + '"></a>' +
        '<div class="carousel-caption d-none d-md-block"><h5>' + item.titulo + "</h5><p>" + resumir(item.texto, 100) + "</p></div>" +
      "</div>");
  });
}

function iniciarHome() {
  renderCarrossel();
  renderCards();

  const campo = document.getElementById("campoPesquisa");
  if (campo) 
    campo.addEventListener("input", renderCards);

  const carrossel = document.getElementById("carrossel");
  carrossel.addEventListener("click", function (e) {
    if (e.target.closest(".carousel-control-prev, .carousel-control-next, .carousel-indicators")) 
      return;
    const ativo = carrossel.querySelector(".carousel-item.active");
    if (ativo) 
      window.location.href = "detalhes.html?id=" + ativo.dataset.id;
  });
}

// Detalhes
function iniciarDetalhes() {
  const id = Number(new URLSearchParams(window.location.search).get("id"));
  const item = getItemPorId(id);
  const container = document.getElementById("detalhes-card");
  if (!item) 
    {
      container.innerHTML = '<p class="text-light text-center mt-5">Item não encontrado.</p>';
      return;
    }
    
  const usuario = getUsuarioLogado();
  const favoritado = isFavorito(usuario && usuario.id, item.id);
  const acaoFavorito = usuario
    ? '<button type="button" id="btnFavDetalhe" class="btn-favorito-detalhe ' + (favoritado ? "favoritado" : "") + '">' +
        (favoritado ? "♥ Remover dos favoritos" : "♡ Adicionar aos favoritos") +
      "</button>"
    : '<p class="mt-3"><a href="login.html" class="link-light">Entre na sua conta</a> para marcar este item como favorito.</p>';

  container.innerHTML =
    '<div class="row mx-md-5 my-4 card-item p-4">' +
      '<div class="col-md-5"><img src="' + item.imagem + '" alt="' + item.titulo + '" class="img-fluid rounded-3"></div>' +
      '<div class="col-md-7">' +
        "<h2>" + item.titulo + "</h2>" +
        "<p>" + item.texto + "</p>" +
        acaoFavorito +
      "</div>" +
    "</div>";

  const btn = document.getElementById("btnFavDetalhe");
  if (btn) 
    btn.addEventListener("click", function () {
      toggleFavorito(usuario.id, item.id);
      iniciarDetalhes();
  });
}

// Favoritos
function iniciarFavoritos() {
  const usuario = getUsuarioLogado();
  if (!usuario) 
    { 
      window.location.href = "login.html"; 
      return; 
    }
  renderFavoritos();
}

function renderFavoritos() {
  const usuario = getUsuarioLogado();
  const container = document.getElementById("favoritos-card");
  const itens = getItens().filter(function (item) { return isFavorito(usuario.id, item.id); });

  container.innerHTML = itens.length ? "" : '<p class="text-light text-center w-100 mt-4">Você ainda não possui itens favoritos cadastrados.</p>';
  itens.forEach(function (item) { container.appendChild(montarCard(item, usuario)); });
  ativarBotoesFavorito(container, renderFavoritos);
}

// Cadastro de Itens
function iniciarCadastroItens() {
  const usuario = getUsuarioLogado();
  if (!usuario || !usuario.admin) 
    { 
      window.location.href = "index.html"; 
      return; 
    }

  document.getElementById("formItem").addEventListener("submit", salvarItem);
  document.getElementById("btnCancelar").addEventListener("click", limparFormulario);
  renderTabela();
}

function limparFormulario() {
  document.getElementById("formItem").reset();
  document.getElementById("itemId").value = "";
  document.getElementById("btnSalvarItem").textContent = "Cadastrar";
}

function salvarItem(event) {
  event.preventDefault();
  const idCampo = document.getElementById("itemId").value;
  const itemOriginal = idCampo ? getItemPorId(Number(idCampo)) : {}; // // Busca o item original para não perder campos fora do formulário

  const item = {
    ...itemOriginal, //preserva situado, extensao, motor, estilo, noticia etc
    id: idCampo ? Number(idCampo) : Date.now(),
    titulo: document.getElementById("titulo").value.trim(),
    imagem: document.getElementById("imagem").value.trim(),
    texto: document.getElementById("descricao").value.trim(),
    destaque: document.getElementById("destaque").checked
  };

  const itens = getItens();
  if (idCampo) 
    {
      const indice = itens.findIndex(function (i) { return Number(i.id) === Number(idCampo); });
      if (indice >= 0) 
        itens[indice] = item;
    } 
  else 
    {
      itens.push(item);
    };

  salvarItens(itens);
  limparFormulario();
  renderTabela();
}

function renderTabela() {
  const corpo = document.getElementById("corpoTabela");
  const itens = getItens();
  corpo.innerHTML = itens.length ? "" : '<tr><td colspan="3" class="text-center">Nenhum item cadastrado.</td></tr>';
  itens.forEach(function (item) {
    corpo.insertAdjacentHTML("beforeend",
      "<tr>" +
        "<td>" + item.titulo + "</td>" +
        "<td>" + (item.destaque ? "Sim" : "Não") + "</td>" +
        "<td>" +
          '<button type="button" class="btn btn-sm btn-outline-light me-2" onclick="editarItem(' + item.id + ')">Editar</button>' +
          '<button type="button" class="btn btn-sm btn-outline-danger" onclick="excluirItem(' + item.id + ')">Excluir</button>' +
        "</td>" +
      "</tr>");
  });
}

function editarItem(id) {
  const item = getItemPorId(id);
  if (!item) 
    return;
  document.getElementById("itemId").value = item.id;
  document.getElementById("titulo").value = item.titulo;
  document.getElementById("imagem").value = item.imagem;
  document.getElementById("descricao").value = item.descricao;
  document.getElementById("destaque").checked = !!item.destaque;
  document.getElementById("btnSalvarItem").textContent = "Atualizar";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function excluirItem(id) {
  if (!confirm("Excluir este item? Essa ação não pode ser desfeita.")) 
    return;

  salvarItens(getItens().filter(function (i) { return Number(i.id) !== Number(id); }));

  const favoritos = getFavoritos();
  Object.keys(favoritos).forEach(function (usuarioId) {
    favoritos[usuarioId] = favoritos[usuarioId].filter(function (favId) { return Number(favId) !== Number(id); });
  });
  salvarFavoritos(favoritos);

  renderTabela();
}
