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
        sessionStorage.setItem("usuarioLogado", JSON.stringify({ perfil: "admin", login: ADMIN.login }));
        window.location.href = "cadastro_itens.html";
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
        nome: user.nome,
        login: user.login,
        cargo: user.cargo,
        departamento: user.departamento
        }));
        window.location.href = "index.html";
        return;
    }
  // Inválidas
  erroDiv.textContent = "Login ou senha incorretos. Verifique seus dados e tente novamente.";
  erroDiv.classList.remove("d-none");
});

const cadastrar = document.getElementById("cadastroUsuario");
const divCadastro = document.getElementById("cadastro-card");
cadastrar.addEventListener("click", function (event) {

    window.location.href = "index.html";
});
// Limpa erro
document.getElementById("login").addEventListener("input", limparErro);
document.getElementById("loginSenha").addEventListener("input", limparErro);
function limparErro() {
  const erroDiv = document.getElementById("erroLogin");
  erroDiv.textContent = "";
  erroDiv.classList.add("d-none");
}