document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("tarefa");
  const btnAdicionar = document.getElementById("adicionar");
  const btnEditar = document.getElementById("editar");
  const btnRemover = document.getElementById("remover");
  const btnMarcarTodos = document.getElementById("marcar-todos");
  const lista = document.getElementById("lista-tarefas");

  let modo = "normal"; // 'normal', 'editando', 'removendo'
  let editandoItem = null;

  function criarItem(texto) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const span = document.createElement("span");
    span.textContent = texto;

    li.appendChild(checkbox);
    li.appendChild(span);
    lista.appendChild(li);
  }

  function atualizarModo(novoModo) {
    lista.classList.remove("editando", "removendo");
    btnMarcarTodos.classList.add("escondido");
    editandoItem = null;

    if (novoModo === "editando") {
      lista.classList.add("editando");
      btnMarcarTodos.classList.remove("escondido");
    } else if (novoModo === "removendo") {
      lista.classList.add("removendo");
      btnMarcarTodos.classList.remove("escondido");
    }

    modo = novoModo;
  }

  btnAdicionar.addEventListener("click", () => {
    const texto = input.value.trim();
    if (texto !== "") {
      criarItem(texto);
      input.value = "";
      input.focus();
    }
  });

  btnEditar.addEventListener("click", () => {
    if (modo !== "editando") {
      atualizarModo("editando");
    } else {
      const selecionados = lista.querySelectorAll("li input[type='checkbox']:checked");
      if (selecionados.length === 1) {
        const li = selecionados[0].closest("li");
        const span = li.querySelector("span");

        if (!li.querySelector("input[type='text']")) {
          const novoInput = document.createElement("input");
          novoInput.type = "text";
          novoInput.value = span.textContent;
          li.replaceChild(novoInput, span);
          novoInput.focus();

          novoInput.addEventListener("keydown", (e) => {
            if (e.key === "Enter") {
              span.textContent = novoInput.value.trim();
              li.replaceChild(span, novoInput);
              atualizarModo("normal");
            }
          });
        } else {
          const novoInput = li.querySelector("input[type='text']");
          span.textContent = novoInput.value.trim();
          li.replaceChild(span, novoInput);
          atualizarModo("normal");
        }
      }
    }
  });

  btnRemover.addEventListener("click", () => {
    if (modo !== "removendo") {
      atualizarModo("removendo");
    } else {
      const selecionados = lista.querySelectorAll("li input[type='checkbox']:checked");
      selecionados.forEach(chk => chk.closest("li").remove());
      atualizarModo("normal");
    }
  });

  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      if (modo === "normal") {
        btnAdicionar.click();
      } else if (modo === "removendo") {
        btnRemover.click();
      } else if (modo === "editando") {
        btnEditar.click();
      }
    }
  });

  btnMarcarTodos.addEventListener("click", () => {
    const checkboxes = lista.querySelectorAll("li input[type='checkbox']");
    checkboxes.forEach(chk => chk.checked = true);
  });
});
