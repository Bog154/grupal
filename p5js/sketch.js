let caminante =[];
let escalaNoise;
/*let color1 = color(0,0,0);//negro
let color2 = color(232,232,232);//blanco grisaceo
let color3 = color(194,100,140);//rosa desaturado
let color4 = color(225,235,235);//celeste claro*/

function setup() {
  background(0,0,90);
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB, 360, 100, 100);
  for(let i = 0; i < 20; i++){
    caminante[i] = new Caminante();
  }

  //escalaNoise = map(width,0,1000,0.001,0.01);
}

function draw() {
  for(let i = 0; i < 20; i++){
    caminante[i].dibujar();
    caminante[i].mover();
    caminante[i].comprobarLimites();
  }
}

function mouseClicked(){                 //con el click se cambia el color de fondo
  if (mouseButton === LEFT) {
    //let colorelegido= random(coloresfondo[coloresfondo.length - 1]);
    background(random(360), random(70), random(70));
    /*if(background(color1)){
      background(color2);
    }else if(background(color2)){
      background(color3);
    }else if(background(color3)){
      background(color4);
    }else if(background(color4)){
      background(color1);
    }*/
  }

}

function keyPressed(){                 //se reinicia y los caminantes aparecen en un random de posición
  if (key == ' ') {
    background(0,0,90);   
    for (let i = 0; i < 20; i++){
      caminante[i] = new Caminante();
    }
  }
  
  if (key == 'v') {                //se modifica la velocidad de los caminantes
    for (let i = 0; i < 20; i++) {
      caminante [i].vel +=1 ;
    }
  }
  if (key == 's') {                //se modifica la velocidad de los caminantes
    for (let i = 0; i < 20; i++) {
      caminante [i].vel -=1 ;
    }
  }
  
  if (key == 'a') {                 //aumentan su tañaño
    for (let i = 0; i < 20; i++) {
      caminante [i].t +=4 ;
    }
  }
  if (key == 'c') {                 //disminuyen su tamaño
    for (let i = 0; i < 20; i++) {
      caminante [i].t -=4 ;
    }
}
}