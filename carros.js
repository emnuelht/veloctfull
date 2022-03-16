let xCarros = [270,330,400,55,125,190];
let yCarros = [0,300,200,0,350,150];

let comprimentoCarros = 40;
let alturaCarros = 60;

let velocidadeCarros = [-1,-2.5,-5,-9,-7.5,-5];

function carrosMostrar() {
   image(imgCarros[0],xCarros[0],yCarros[0],comprimentoCarros,alturaCarros);
  image(imgCarros[1],xCarros[1],yCarros[1],comprimentoCarros,alturaCarros);
  image(imgCarros[2],xCarros[2],yCarros[2],comprimentoCarros,alturaCarros);
   image(imgCarros[3],xCarros[3],yCarros[3],comprimentoCarros,alturaCarros);
  image(imgCarros[4],xCarros[4],yCarros[4],comprimentoCarros,alturaCarros);
  image(imgCarros[5],xCarros[5],yCarros[5],comprimentoCarros,alturaCarros);
}

function movimentaCarro() {
  yCarros[0] -= velocidadeCarros[0];
  yCarros[1] -= velocidadeCarros[1];
  yCarros[2] -= velocidadeCarros[2];
  yCarros[3] -= velocidadeCarros[3];
  yCarros[4] -= velocidadeCarros[4];
  yCarros[5] -= velocidadeCarros[5];
}

function voltarCarro() {
  if(yCarros[0] > 560) {
    yCarros[0] = -50;
  }
  else if(yCarros[0] < -50) {
    yCarros[0] = +550;
  }
  if(yCarros[1] > 580) {
    yCarros[1] = -50;
  }
  else if(yCarros[1] < -50) {
    yCarros[1] = +550;
  }
  if(yCarros[2] > 580) {
    yCarros[2] = -50;
  }
  else if(yCarros[2] < -50) {
    yCarros[2] = +550;
  }
  if(yCarros[3] > 580) {
    yCarros[3] = -50;
  }
  if(yCarros[4] > 580) {
    yCarros[4] = -50;
  }
  if(yCarros[5] > 580) {
    yCarros[5] = -50;
  }
}






















