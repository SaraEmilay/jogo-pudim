//código do ator
let xAtor = 250;
let yAtor = 366;
let colisao = false;
let meusPontos = 0;

function mostraAtor() {
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor() {
  if (keyIsDown(UP_ARROW)) {
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeMover()) {
      yAtor += 3;
    }
  }
}
function verificaColisao() {
  //collideRectCircle(r.x,r.y, sz.x,sz.y, c.x,c.y, diameter)
  for (let i = 0; i < imagemCarros.length; i = i + 1) {
    colisao = collideRectCircle(
      xCarros[i],
      yCarros[i],
      comprimentoCarro,
      alturaCarros,
      xAtor,
      yAtor,
      15
    );
    if (colisao) {
      voltaAtor();
      somColisao.play();
      if (meusPontosMaiorQueZero()) {
        meusPontos -= 1;
      }
    }
  }
}
function voltaAtor() {
  yAtor = 366;
}
function incluiPontos() {
  textAlign(CENTER);
  textSize(20);
  fill(color(220, 20, 60));
  text(meusPontos, width / 5, 25);
}

function marcaPontos() {
  if (yAtor < 15) {
    meusPontos += 1;
    somPontos.play();
    voltaAtor();
  }
}
function meusPontosMaiorQueZero() {
  return meusPontos > 0;
}
function podeMover() {
  return yAtor < 366;
}