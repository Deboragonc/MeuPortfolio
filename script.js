document.addEventListener("DOMContentLoaded", function () {

    // ==================================================
    // CONTADOR DE CURSOS
    // ==================================================

    const cursos = document.querySelectorAll(".curso");
    const quantidadeCursos = document.getElementById("quantidadeCursos");

    if (quantidadeCursos) {
        quantidadeCursos.textContent = cursos.length;
    }


    // ==================================================
    // PESQUISA DE CURSOS
    // ==================================================

    const campoPesquisa = document.getElementById("campoPesquisa");
    const resultadoPesquisa = document.getElementById("resultadoPesquisa");

    if (campoPesquisa) {

        campoPesquisa.addEventListener("input", function () {

            const pesquisa = campoPesquisa.value
                .toLowerCase()
                .trim();

            let encontrados = 0;

            cursos.forEach(function (curso) {

                const nomeCurso = curso.textContent
                    .toLowerCase();

                if (nomeCurso.includes(pesquisa)) {

                    curso.style.display = "";

                    encontrados++;

                } else {

                    curso.style.display = "none";

                }

            });


            if (pesquisa === "") {

                resultadoPesquisa.textContent =
                    "Digite para pesquisar entre os cursos.";

            } else if (encontrados === 0) {

                resultadoPesquisa.textContent =
                    "Nenhum curso encontrado.";

            } else if (encontrados === 1) {

                resultadoPesquisa.textContent =
                    "1 curso encontrado.";

            } else {

                resultadoPesquisa.textContent =
                    encontrados + " cursos encontrados.";

            }

        });

    }

});