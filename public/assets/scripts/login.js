const ADMIN = {
  login: "admin",
  senha: "123",
  perfil: "admin"
};

document.getElementById("formLogin").addEventListener("submit", function (event) {
  event.preventDefault();
  const login = document.getElementById("login").value.trim();
  const senha = document.getElementById("loginSenha").value;
  // Administrador
  if (login === ADMIN.login && senha === ADMIN.senha) 
    {
      const linkCadastroItens = document.querySelector("linkAdmin");
      linkCadastroItens.style.display = 'block';
      sessionStorage.setItem("usuarioLogado", JSON.stringify({ perfil: "admin", login: ADMIN.login }));
      window.location.href = "index.html";
      return;
    }
  // Usuários
  const users = JSON.parse(localStorage.getItem("usuarios")) || [];
  const user = users.find(f => f.login === login && f.senha === senha);
  if (user) 
    {
        sessionStorage.setItem("usuarioLogado", JSON.stringify({
        perfil: "usuario",
        id: user.id,
        login: user.login,
        nome: user.nome,
        email: user.email,
        senha: user.senha
        }));
        window.location.href = "index.html";
        return;
    }
  // Inválidas
  erroDiv.textContent = "Login ou senha incorretos. Verifique seus dados e tente novamente.";
  erroDiv.classList.remove("d-none");
});

const cadastrar = document.getElementById("cadastroUsuario");
const divCadastro = document.querySelector(".cadastro-card");
const loginCard = document.querySelector(".login-card");
cadastrar.addEventListener("click", function (event) {
  divCadastro.style.display = 'block';
  loginCard.style.display = 'none';
});

const envioCadastro = document.querySelector(".btn-cadastro");
document.getElementById("formCadastro").addEventListener("submit", function (event) {

});
// Limpa erro
document.getElementById("login").addEventListener("input", limparErro);
document.getElementById("loginSenha").addEventListener("input", limparErro);
function limparErro() {
  const erroDiv = document.getElementById("erroLogin");
  erroDiv.textContent = "";
  erroDiv.classList.add("d-none");
}