function calcular() {
  // calculo aleatório
  nota_reaction = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  document.querySelector(".nota_reaction").innerHTML = nota_reaction;

  nota_memory = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  document.querySelector(".nota_memory").innerHTML = nota_memory;

  nota_verbal = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  document.querySelector(".nota_verbal").innerHTML = nota_verbal;

  nota_visual = Math.floor(Math.random() * (100 - 40 + 1) + 40);
  document.querySelector(".nota_visual").innerHTML = nota_visual;

  // animação dos resultados pocentagem
  porcentage_fundo_reaction = document.querySelector(
    ".porcentage_fundo_reaction"
  );

  const numero_reaction = nota_reaction + "%";

  porcentage_fundo_reaction.style.width = numero_reaction;

  //--------------------------------------------------------
  porcentage_fundo_memory = document.querySelector(".porcentage_fundo_memory");

  const numero_memory = nota_memory + "%";

  porcentage_fundo_memory.style.width = numero_memory;

  //--------------------------------------------------------
  porcentage_fundo_verbal = document.querySelector(".porcentage_fundo_verbal");

  const numero_verbal = nota_verbal + "%";

  porcentage_fundo_verbal.style.width = numero_verbal;

  //--------------------------------------------------------
  porcentage_fundo_visual = document.querySelector(".porcentage_fundo_visual");

  const numero_visual = nota_visual + "%";

  porcentage_fundo_visual.style.width = numero_visual;

  // animacao numero principal

  var nota_numero_principal = Number.parseInt(
    (nota_reaction + nota_memory + nota_verbal + nota_visual) / 4
  );

  var conta = 0;

  var numero_animacao_01 = document.querySelector(".numero_principal");

  function starCounter() {
    var interval = setInterval(function () {
      conta++;
      numero_animacao_01.innerText = conta;
      if (conta === nota_numero_principal) {
        clearInterval(interval);
      }
    }, 25);
  }
  starCounter();
}
