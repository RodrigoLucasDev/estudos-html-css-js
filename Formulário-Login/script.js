document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login-form");
  
    form.addEventListener("submit", (evento) => {
      evento.preventDefault();
  
      const email = document.getElementById("email").value.trim();
      const senha = document.getElementById("senha").value;
  
      // Validação de email
      const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
      // Validação de senha (Min 8 caracteres, 1 letra maiúscula, 1 minúscula, 1 símbolo)
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
  