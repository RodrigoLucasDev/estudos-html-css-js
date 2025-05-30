document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("login-form");
  const inputSenha = document.getElementById("senha");
  const toggleSenha = document.getElementById("toggle-senha");
  const botaoTrocarFundo = document.getElementById("trocar-fundo");

  // Lista de imagens para alternar o fundo
  const imagensFundo = [
    'img/fundo1.png',
    'img/fundo2.png',
    'img/fundo3.png'
  ];

  let indiceAtual = 0;

  // Aplica a primeira imagem assim que carregar
  document.body.style.backgroundImage = `url('${imagensFundo[indiceAtual]}')`;

  // Trocar imagem de fundo ao clicar no botão
  botaoTrocarFundo.addEventListener("click", () => {
    indiceAtual = (indiceAtual + 1) % imagensFundo.length;
    document.body.style.backgroundImage = `url('${imagensFundo[indiceAtual]}')`;
  });
  toggleSenha.src = "img/olho-fechado.jpg";
  // Mostrar/ocultar senha com ícone de olho
  toggleSenha.addEventListener("click", () => {
    const senhaVisivel = inputSenha.type === "text";

    inputSenha.type = senhaVisivel ? "password" : "text";
    toggleSenha.src = senhaVisivel
      ? "img/olho-fechado.jpg"
      : "img/olho-aberto.jpg";
  });

  // Validação de formulário ao enviar
  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const email = document.getElementById("email").value.trim();
    const senha = inputSenha.value;

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const senhaValida = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(senha);

    if (!emailValido) {
      alert("Digite um email válido!");
      return;
    }

    if (!senhaValida) {
      alert("A senha precisa ter no mínimo 8 caracteres, incluindo uma letra maiúscula, uma minúscula e um símbolo.");
      return;
    }

    console.log("Email digitado:", email);
    console.log("Senha digitada:", senha);
    alert("Login válido!");
  });
});
