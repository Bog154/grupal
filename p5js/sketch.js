let caminante =[];
let escalaNoise;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(225);
  for(let i = 0; i < 10; i++){
    caminante[i] = new Caminante();
  }

  //escalaNoise = map(width,0,1000,0.001,0.01);
}

function draw() {
  for(let i = 0; i < 10; i++){
    caminante[i].dibujar();
    caminante[i].mover();
    caminante[i].comprobarLimites();
  }
}

function keyPressed(){

}
