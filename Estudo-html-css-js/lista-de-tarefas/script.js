document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("tarefa");
    const btnAdicionar = document.getElementById("adicionar");
    const btnEditar = document.getElementById("editar");
    const btnRemover = document.getElementById("remover");
    const lista = document.getElementById("lista-tarefas");
    const btnAlternancia = document.getElementById("btn-selecionar");

    let modo = "normal";

    function atualizarModo(novoModo) {
        lista.classList.remove("editando", "removendo");
        btnAlternancia.classList.add("escondido");

        if (novoModo === "editando") {
            lista.classList.add("editando");
        } else if (novoModo === "removendo") {
            lista.classList.add("removendo");
            btnAlternancia.classList.remove("escondido");
        }

        modo = novoModo;
    }

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

    btnAdicionar.addEventListener("click", () => {
        const texto = input.value.trim();
        if (texto !== "") {
            criarItem(texto);
            input.value = "";
            input.focus();
        }
    });

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") btnAdicionar.click();
    });

    btnRemover.addEventListener("click", () => {
        if (modo !== "removendo") {
            atualizarModo("removendo");
        } else {
            const selecionados = lista.querySelectorAll("li input[type='checkbox']:checked");
            selecionados.forEach(cb => cb.closest("li").remove());
            atualizarModo("normal");
        }
    });

    btnEditar.addEventListener("click", () => {
        const editandoInput = lista.querySelector("li input[type='text']");

        if (modo !== "editando") {
            atualizarModo("editando");
        } else if (editandoInput) {
            // Salva edição e volta ao modo normal
            const li = editandoInput.closest("li");
            const span = document.createElement("span");
            span.textContent = editandoInput.value.trim();
            li.replaceChild(span, editandoInput);
            li.querySelector("input[type='checkbox']").checked = false;
            atualizarModo("normal");
        } else {
            // Se clicou de novo no botão sem editar nada → sai do modo também
            atualizarModo("normal");
        }
    });

    lista.addEventListener("change", (e) => {
        if (modo === "editando" && e.target.type === "checkbox") {
            const checkbox = e.target;
            const li = checkbox.closest("li");

            if (!li.querySelector("input[type='text']")) {
                const span = li.querySelector("span");
                const inputTexto = document.createElement("input");
                inputTexto.type = "text";
                inputTexto.value = span.textContent;

                li.replaceChild(inputTexto, span);
                inputTexto.focus();

                inputTexto.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        const novoSpan = document.createElement("span");
                        novoSpan.textContent = inputTexto.value.trim();
                        li.replaceChild(novoSpan, inputTexto);
                        checkbox.checked = false;
                        atualizarModo("normal");
                    }
                });
            }
        }

        if (modo === "removendo" && e.target.type === "checkbox") {
            if (e.target.checked) {
                e.target.closest("li").remove();
                atualizarModo("normal");
            }
        }
    });

    btnAlternancia.addEventListener("click", () => {
        const checkboxes = lista.querySelectorAll("li input[type='checkbox']");

        const todosMarcados = Array.from(checkboxes).every(cb => cb.checked);

        checkboxes.forEach(cb => cb.checked = !todosMarcados);
    });

});
