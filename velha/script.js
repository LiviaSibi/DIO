let jogador, vencedor = null;
const selectPlayer = document.getElementById('jogador');
const selectWinner = document.getElementById('vencedor');
const quadrado = document.getElementsByClassName('quadrado');

changePlayer('X');

function selectQuadrado(id) {
  var quadrado = document.getElementById(id);

  if (vencedor !== null) {
    return;
  }

  quadrado.innerHTML = jogador;

  if (jogador === 'X') {
    jogador = 'O';
    quadrado.style.color = '#202124';
  }
  else {
    jogador = "X";
    quadrado.style.color = 'white';
  }

  changePlayer(jogador);
  checkWinner();
}

function changePlayer(valor) {
  jogador = valor;
  selectPlayer.innerHTML = jogador;
}

function checkWinner() {
  const quadrado1 = document.getElementById('1');
  const quadrado2 = document.getElementById('2');
  const quadrado3 = document.getElementById('3');
  const quadrado4 = document.getElementById('4');
  const quadrado5 = document.getElementById('5');
  const quadrado6 = document.getElementById('6');
  const quadrado7 = document.getElementById('7');
  const quadrado8 = document.getElementById('8');
  const quadrado9 = document.getElementById('9');

  if (checkMatch(quadrado1, quadrado2, quadrado3)) {
    changeColor(quadrado1, quadrado2, quadrado3)
    changeWinner(quadrado1);
    return
  }

  if (checkMatch(quadrado4, quadrado5, quadrado6)) {
    changeColor(quadrado4, quadrado5, quadrado6)
    changeWinner(quadrado4);
    return;
  }

  if (checkMatch(quadrado7, quadrado8, quadrado9)) {
    changeColor(quadrado7, quadrado8, quadrado9)
    changeWinner(quadrado7);
    return;
  }

  if (checkMatch(quadrado1, quadrado4, quadrado7)) {
    changeColor(quadrado1, quadrado4, quadrado7)
    changeWinner(quadrado1);
    return;
  }

  if (checkMatch(quadrado2, quadrado5, quadrado8)) {
    changeColor(quadrado2, quadrado5, quadrado8)
    changeWinner(quadrado2);
    return;
  }

  if (checkMatch(quadrado3, quadrado6, quadrado9)) {
    changeColor(quadrado3, quadrado6, quadrado9)
    changeWinner(quadrado3);
    return;
  }

  if (checkMatch(quadrado1, quadrado5, quadrado9)) {
    changeColor(quadrado1, quadrado5, quadrado9)
    changeWinner(quadrado1);
    return;
  }

  if (checkMatch(quadrado3, quadrado5, quadrado7)) {
    changeColor(quadrado3, quadrado5, quadrado7)
    changeWinner(quadrado3);
    return;
  }

}

function checkMatch(valor1, valor2, valor3) {
  let isEqual = false;

  if (valor1.innerHTML !== '' && valor1.innerHTML === valor2.innerHTML && valor2.innerHTML === valor3.innerHTML) {
    isEqual = true;
  }

  return isEqual;
}

function changeWinner(quadrado) {
  vencedor = quadrado.innerHTML;
  selectWinner.innerHTML = vencedor;
}

function changeColor(quadrado1, quadrado2, quadrado3) {
  quadrado1.style.background = '#00d600';
  quadrado2.style.background = '#00d600';
  quadrado3.style.background = '#00d600';
}

function restartGame() {
  vencedor = null;
  selectWinner.innerHTML = '';

  for (var i = 1; i <= 9; i++) {
    var quadrado = document.getElementById(i);

    quadrado.style.background = '#0e897d';
    quadrado.innerHTML = '';
  }

  changePlayer('X');
}
