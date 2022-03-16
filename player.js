let player;
let xPlayer = 270;
let yPlayer = 470;

let velocidadeP = 5;

let playerComprimento = 40;
let playerAltura = 60;

let bateu = false;

function mostrarPlayer() {
  image(player,xPlayer,yPlayer,playerComprimento,playerAltura)
}

function movimentoP() {
  yPlayer -= 0.01;
}

function movimentaPlayer() {
  if(keyIsDown(87)) {
  velocidadeCarros[0] -= 0.1;
  velocidadeCarros[1] -= 0.1;
  velocidadeCarros[2] -= 0.1;
  velocidadeCarros[3] -= 0.1;
  velocidadeCarros[4] -= 0.1;
  velocidadeCarros[5] -= 0.1;
  }
  if(keyIsDown(83)) {
  velocidadeCarros[0] =+ 5;
  velocidadeCarros[1] =+ 5;
  velocidadeCarros[2] =+ 5;
  velocidadeCarros[3] =- 5;
  velocidadeCarros[4] =- 5;
  velocidadeCarros[5] =- 5;
  }
  if(keyIsDown(65)) {
    if(nPasseE()) {
     xPlayer -= velocidadeP; 
    }
  }
  if(keyIsDown(68)) {
    if(nPasseD()) {
     xPlayer += velocidadeP; 
    }
  }
}

function bateuCarro() {
  for(let i = 0; i < imgCarros.length; i = i + 1){
    bateu = collideRectRect(xCarros[i],yCarros[i],comprimentoCarros, alturaCarros, xPlayer, yPlayer, 30, 50);
    if(bateu) {
      morreu();
    }
  }
}

function morreu() {
  velocidadeP = 0;
  velocidadeCarros = [0,0,0,0,0,0];
  image(fatality, 50, 50, 400, 300);
  let txt = "Presione 'espaço' para reiniciar";
  text(txt,170,350);
  if(keyIsDown(32)) {
    document.location.reload(true);
  }
}

function nPasseD() {
  return xPlayer < 420;
}
function nPasseE() {
  return xPlayer > 40;
}















