if (getUsuarioLogado()) 
  {
    window.location.href = "index.html"; // Se o usuário já estiver logado volta para a home
  }

const formLogin = document.getElementById("formLogin");
const formCadastro = document.getElementById("formCadastro");
const cadastroCard = document.querySelector(".cadastro-card");
const loginCard = document.querySelector(".login-card");

document.getElementById("cadastroUsuario").addEventListener("click", function (e) {
  e.preventDefault();
  cadastroCard.style.display = "block";
  loginCard.style.display = "none";
});

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();
  const login = document.getElementById("login").value.trim();
  const senha = document.getElementById("loginSenha").value;
  const erro = document.getElementById("erroLogin");

  const usuario = getUsuarios().find(function (u) { return u.login === login && u.senha === senha; });
  if (!usuario) 
    {
      erro.textContent = "Login ou senha incorretos. Verifique seus dados e tente novamente.";
      erro.classList.remove("d-none");
      return;
    }

  definirUsuarioLogado({ id: usuario.id, login: usuario.login, nome: usuario.nome, email: usuario.email, admin: !!usuario.admin });
  window.location.href = "index.html";
});

formCadastro.addEventListener("submit", function (e) {
  e.preventDefault();
  const login = document.getElementById("CadastroLogin").value.trim();
  const nome = document.getElementById("CadastroNome").value.trim();
  const email = document.getElementById("CadastroEmail").value.trim();
  const senha = document.getElementById("CadastroSenha").value;
  const erro = document.getElementById("erroCadastro");

  const usuarios = getUsuarios();
  if (usuarios.some(function (u) { return u.login === login; })) 
    {
      erro.textContent = "Este login já está em uso. Escolha outro.";
      erro.classList.remove("d-none");
      return;
    }

  const novoUsuario = { id: "u" + Date.now(), login: login, senha: senha, nome: nome, email: email, admin: false };
  usuarios.push(novoUsuario);
  salvarUsuarios(usuarios);

  definirUsuarioLogado({ id: novoUsuario.id, login: login, nome: nome, email: email, admin: false });
  window.location.href = "index.html";
});

document.getElementById("login").addEventListener("input", function () { document.getElementById("erroLogin").classList.add("d-none"); });
document.getElementById("CadastroLogin").addEventListener("input", function () { document.getElementById("erroCadastro").classList.add("d-none"); });