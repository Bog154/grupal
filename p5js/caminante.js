class Caminante{

    constructor(){
        this.x = random(width);
        this.y = random(height);
        this.dx;
        this.dy;
        this.dir = radians(random(360));
        this.vel = 4;
        this.t = 10;
        //this.color = color(0, 168, 0, 60);
        this.color = color(random(360), random(100), random(100), 60);
    }

    dibujar(){
         push();
        noStroke();
        fill(this.color);    
        translate(this.x,this.y);
        rotate(this.dir);
        ellipse(0,0,this.t,this.t);
        pop();
    }
    mover(){
       
        //valor = noise((this.x+frameCount*10)*escalaNoise, (this.y+frameCount*10)*escalaNoise);
        
        //this.dir = map(valor,0,1,0,radians(360));
        this.dir += radians(random(-18,18));

        this.dx = this.vel * cos(this.dir);
        this.dy = this.vel * sin(this.dir);
        
        this.x += this.dx;
        this.y += this.dy;
    }
    comprobarLimites(){
        if(this.x < 0 || this.x > width){
            this.dir = PI - this.dir;
        }
        if(this.y < 0 || this.y > height){
            this.dir= -this.dir;
        }
    }
}