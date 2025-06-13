let expressao = "";

function exibir() {
  document.getElementById("valor1").textContent = expressao;
}

for (let i = 0; i <= 9; i++) {
  document.getElementById(i.toString()).onclick = function () {
    expressao += i;
    exibir();
  };
}

document.getElementById("soma").onclick = function () {
  expressao += "+";
  exibir();
};

document.getElementById("subtrair").onclick = function () {
  expressao += "-";
  exibir();
};

document.getElementById("multiplicar").onclick = function () {
  expressao += "*";
  exibir();
};

document.getElementById("dividir").onclick = function () {
  expressao += "/";
  exibir();
};

document.getElementById("parentese1").onclick = function () {
  expressao += "(";
  exibir();
};

document.getElementById("parentese2").onclick = function () {
  expressao += ")";
  exibir();
};

document.getElementById("limpar").onclick = function () {
  expressao = "";
  exibir();
};

document.getElementById("resultado").onclick = function () {
  try {
    let resultado = eval(expressao);
    if (!isFinite(resultado)) {
      resultado = "Erro: divisão por zero";
    }
    expressao = resultado.toString();
  } catch {
    expressao = "Erro na expressão";
  }
  exibir();
};