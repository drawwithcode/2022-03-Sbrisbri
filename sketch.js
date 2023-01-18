let bg;
let washingm;
let oblò;
let soap1;
let soap2;
let soap3;
let basket;
let gatto;
let gattoflipped;
let gattoinwm;
let miagolio;
let acqua;
let bubblesoap = [];
let video;
let r = 0;
let camera = false;
let program = 0;
let ina = false;

function preload(){

  bg = loadImage("./Assets/Images/Background.png");
  washingm = loadImage("./Assets/Images/Lavatrice.png");
  oblò = loadImage("./Assets/Images/Oblò.png");
  soap1 = loadImage("./Assets/Images/Marsiglia.png");
  soap2 = loadImage("./Assets/Images/Sole detersivo.png");
  soap3 = loadImage("./Assets/Images/Dash.png");
  basket = loadImage("./Assets/Images/Cesto biancheria sporca.png");
  gattoinwm = loadImage("./Assets/Images/Gattonellalavatrice.png");
  miagolio = loadSound("./Assets/Audio/Miagolio gatto.mp3");
  acqua = loadImage("./Assets/Images/Acqua.png");
  gatto = loadImage("./Assets/Images/Gatto.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);

  for(let i = 0; i < 1; i++){
      bubblesoap[i] = new Bubblesoap(random(width), random(height));
    }

  video = createCapture(VIDEO);
  video.hide();

}

function draw() {

  push();
  imageMode(CENTER);
  image(bg, windowWidth / 2, windowHeight / 2, windowWidth, windowHeight);
  pop();
 
//to switch from a program to another through the buttons on the washing machine
  switch (program){
    case 0:
      program0();
      break;
    case 1: 
      program1();
      break;
    case 2:
      program2();
      break;
    case 3:
      program3();
      break;
    case 4:
      program4();
      break;
    case 5:
      program5();
      break;
  }

  console.log(width);
  console.log(mouseX, mouseY);

    for(let i = 0; i < bubblesoap.length; i++){
      bubblesoap[i].show();
      bubblesoap[i].move();
    }  

}

function program0(){

  push();
  if(camera == true){

    push();
    imageMode(CENTER);
    translate(width / 2, height / 2);
    let p0 = video.get();
    image(p0, 0, 90, video.width * 0.55, video.height * 0.55);
    ina = false;
    pop();

    push();
    textSize(32);
    textFont("Love Ya Like A Sister");
    strokeWeight(3);
    noStroke();
    stroke("#000000");
    fill("#ff5f02");
    text("Choose the program by pressing the buttons on the washing machine", windowWidth / 2 - 700 , windowHeight / 2 - 300, 300, 300);
    pop();

  } else {
    push();
    imageMode(CENTER);
    translate(width / 2, height / 2);
    image(oblò, 10, 90, oblò.width / 3.7, oblò.height / 3.7);
    ina = false;
    pop();

  push();

    textSize(32);
    textFont("Love Ya Like A Sister");
    strokeWeight(3);
    noStroke();
    stroke("#000000");
    fill("#ff5f02");
    text("Click on the porthole to load the washing machine", windowWidth / 2 - 700 , windowHeight / 2 - 300, 300, 300);

  pop();

  }

  if((mouseX > windowWidth / 2 - 140) && (mouseX < windowWidth / 2 + 100) && (mouseY > 350) && (mouseY < 580) && mouseIsPressed == true){
    camera = true;
  }

  if(mouseX > windowWidth / 2 - 192 && mouseX < windowWidth / 2 - 152 && mouseY > windowHeight / 2 - 142 && mouseY < windowHeight / 2 - 100 && mouseIsPressed == true){
    program = 1;
  } else if (mouseX > windowWidth / 2 - 145 && mouseX < windowWidth / 2 - 115 && mouseY > windowHeight / 2 - 123 && mouseY < windowHeight / 2 - 79 && mouseIsPressed == true) {
    program = 2;
  } else if (mouseX > windowWidth / 2 - 96 && mouseX < windowWidth / 2 - 66 && mouseY > windowHeight / 2 - 136 && mouseY < windowHeight / 2 - 92 && mouseIsPressed == true){
    program = 3
  } else if(mouseX > windowWidth / 2 - 46 && mouseX < windowWidth / 2 - 16 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true){
    program = 4
  } else if (mouseX > windowWidth / 2 + 3 && mouseX < windowWidth / 2 + 33 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true){
    program = 5;
  } 

  pop();

  push();
  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(basket, 470, 215, basket.width / 4, basket.height / 4);
  image(soap1, 0, - 303, soap1.width / 1.35, soap1.height / 1.35);
  image(soap3, 30, - 204, soap3.width / 2.6, soap3.height / 2.6);
  image(soap2, 80, - 159, soap2.width / 3.5, soap2.height / 3.5);
  image(gatto, - 730, 179, gatto.width / 2.6, gatto.height / 2.6);
  pop();

  push();
  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(washingm, 10, 90, washingm.width / 3.7, washingm.height / 3.7);
  pop();

  miagolio.stop();

}

//if you press the first button
function program1(){

push();
 
imageMode(CENTER);
translate(width/2 - 10, height/2 + 100);
r = r + 1;
rotate(r);  
let p1 = video.get();
image(p1, 0, 0, video.width / 1.9, video.height / 1.9);
  
pop();

push();
  if ((mouseX > windowWidth / 2 - 140) && (mouseX < windowWidth / 2 + 100) && (mouseY > 350) && (mouseY < 580) && mouseIsPressed == true){
    program = 0;
  } else if(mouseX > windowWidth / 2 - 145 && mouseX < windowWidth / 2 - 115 && mouseY > windowHeight / 2 - 123 && mouseY < windowHeight / 2 - 79 && mouseIsPressed == true){
    program = 2;
  }  else if (mouseX > windowWidth / 2 - 96 && mouseX < windowWidth / 2 - 66 && mouseY > windowHeight / 2 - 136 && mouseY < windowHeight / 2 - 92 && mouseIsPressed == true){
    program = 3
  } else if(mouseX > windowWidth / 2 - 46 && mouseX < windowWidth / 2 - 16 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true){
    program = 4
  } else if (mouseX > windowWidth / 2 + 3 && mouseX < windowWidth / 2 + 33 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true) {
    program = 5;
  } 

pop();

push();
  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(basket, 470, 215, basket.width / 4, basket.height / 4);
  image(soap1, 0, - 303, soap1.width / 1.35, soap1.height / 1.35);
  image(soap3, 30, - 204, soap3.width / 2.6, soap3.height / 2.6);
  image(soap2, 80, -159, soap2.width / 3.5, soap2.height / 3.5);
  image(gatto, - 630, 179, gatto.width / 2.6, gatto.height / 2.6);
pop();

push();
  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(washingm, 10, 90, washingm.width / 3.7, washingm.height / 3.7);
  pop();

  ina = false;
  miagolio.stop();

pop();

push();

  textSize(32);
  textFont("Love Ya Like A Sister");
  strokeWeight(3);
  noStroke();
  stroke("#000000");
  fill("#ff5f02");
  text("Program One: quick wash", windowWidth / 2 - 700 , windowHeight / 2 - 300, 230, 300);

pop();

}

//if you press the second button
function program2(){

  push();

  imageMode(CENTER);
  translate(width/2 - 10, height/2 + 100);
  r = r + 0.1;
  rotate(r);  
  let bw = video.get();
  bw.filter(GRAY);
  image(bw, 0, 0, video.width / 1.9, video.height / 1.9);

pop();

push();

  if ((mouseX > windowWidth / 2 - 140) && (mouseX < windowWidth / 2 + 100) && (mouseY > 350) && (mouseY < 580) && mouseIsPressed == true){
    program = 0;
  } else if(mouseX > windowWidth / 2 - 192 && mouseX < windowWidth / 2 - 152 && mouseY > windowHeight / 2 - 142 && mouseY < windowHeight / 2 - 100 && mouseIsPressed == true){
    program = 1;
  } else if (mouseX > windowWidth / 2 - 96 && mouseX < windowWidth / 2 - 66 && mouseY > windowHeight / 2 - 136 && mouseY < windowHeight / 2 - 92 && mouseIsPressed == true){
    program = 3
  } else if(mouseX > windowWidth / 2 - 46 && mouseX < windowWidth / 2 - 16 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true){
    program = 4
  } else if (mouseX > windowWidth / 2 + 3 && mouseX < windowWidth / 2 + 33 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true) {
    program = 5;
  }

pop();

push();

  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(basket, 470, 215, basket.width / 4, basket.height / 4);
  image(soap1, 0, - 303, soap1.width / 1.35, soap1.height / 1.35);
  image(soap3, 30, - 204, soap3.width / 2.6, soap3.height / 2.6);
  image(soap2, 80, -159, soap2.width / 3.5, soap2.height / 3.5);
  image(gatto, - 530, 179, gatto.width / 2.6, gatto.height / 2.6);
  
pop();

push();

  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(washingm, 10, 90, washingm.width / 3.7, washingm.height / 3.7);

pop();

ina = false;
miagolio.stop();

push();

  textSize(32);
  textFont("Love Ya Like A Sister");
  strokeWeight(3);
  noStroke();
  stroke("#000000");
  fill("#ff5f02");
  text("Program Two: whites and delicates", windowWidth / 2 - 700 , windowHeight / 2 - 300, 230, 300);
  
pop();

}

//if you press the third button
function program3(){
  
  push();
    
    imageMode(CENTER);
    translate(width/2 - 10, height/2 + 100);
    let prog3 = video.get();
    let vel = map(mouseX, 0, windowWidth, 0, 40);
    rotate(vel);
    image(prog3, 0, 0, video.width / 1.9, video.height / 1.9);
  
  pop();
  
  push();
  
    if ((mouseX > windowWidth / 2 - 140) && (mouseX < windowWidth / 2 + 100) && (mouseY > 350) && (mouseY < 580) && mouseIsPressed == true){
      program = 0;
    } else if(mouseX > windowWidth / 2 - 192 && mouseX < windowWidth / 2 - 152 && mouseY > windowHeight / 2 - 142 && mouseY < windowHeight / 2 - 100 && mouseIsPressed == true){
      program = 1;
    } else if (mouseX > windowWidth / 2 - 145 && mouseX < windowWidth / 2 - 115 && mouseY > windowHeight / 2 - 123 && mouseY < windowHeight / 2 - 79 && mouseIsPressed == true) {
      program = 2;
    } else if(mouseX > windowWidth / 2 - 46 && mouseX < windowWidth / 2 - 16 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true){
      program = 4
    } else if (mouseX > windowWidth / 2 + 3 && mouseX < windowWidth / 2 + 33 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true) {
      program = 5;
    }
   
  
  pop();
  
  push();
  
    translate(windowWidth / 2, windowHeight / 2);
    imageMode(CENTER);
    image(basket, 470, 215, basket.width / 4, basket.height / 4);
    image(soap1, 0, - 303, soap1.width / 1.35, soap1.height / 1.35);
    image(soap3, 30, - 204, soap3.width / 2.6, soap3.height / 2.6);
    image(soap2, 80, -159, soap2.width / 3.5, soap2.height / 3.5);
    image(gatto, - 430, 179, gatto.width / 2.6, gatto.height / 2.6);
  
  pop();
  
  push();
  
    translate(windowWidth / 2, windowHeight / 2);
    imageMode(CENTER);
    image(washingm, 10, 90, washingm.width / 3.7, washingm.height / 3.7);
  
  pop();
  
    ina = false;
    miagolio.stop();
  
  push();
  
    textSize(32);
    textFont("Love Ya Like A Sister");
    strokeWeight(3);
    noStroke();
    stroke("#000000");
    fill("#ff5f02");
    text("Program Three: choose the speed you desire", windowWidth / 2 - 700 , windowHeight / 2 - 300, 300, 300);
  
  pop();
  
  }

//if you press the fourth button
function program4(){

push();

  if ((mouseX > windowWidth / 2 - 140) && (mouseX < windowWidth / 2 + 100) && (mouseY > 350) && (mouseY < 580) && mouseIsPressed == true){
    program = 0;
  } else if(mouseX > windowWidth / 2 - 192 && mouseX < windowWidth / 2 - 152 && mouseY > windowHeight / 2 - 142 && mouseY < windowHeight / 2 - 100 && mouseIsPressed == true){
    program = 1;
  } else if (mouseX > windowWidth / 2 - 145 && mouseX < windowWidth / 2 - 115 && mouseY > windowHeight / 2 - 123 && mouseY < windowHeight / 2 - 79 && mouseIsPressed == true) {
    program = 2;
  } else if (mouseX > windowWidth / 2 - 96 && mouseX < windowWidth / 2 - 66 && mouseY > windowHeight / 2 - 136 && mouseY < windowHeight / 2 - 92 && mouseIsPressed == true){
    program = 3
  } else if (mouseX > windowWidth / 2 + 3 && mouseX < windowWidth / 2 + 33 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true) {
    program = 5;
  }

pop();

push();

  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(basket, 470, 215, basket.width / 4, basket.height / 4);
  image(soap1, 0, - 303, soap1.width / 1.35, soap1.height / 1.35);
  image(soap3, 30, - 204, soap3.width / 2.6, soap3.height / 2.6);
  image(soap2, 80, -159, soap2.width / 3.5, soap2.height / 3.5);
  image(gattoinwm, 90, 110, gattoinwm.width / 1.6, gattoinwm.height / 1.6);

pop();

push();

  translate(windowWidth / 2, windowHeight / 2);
  imageMode(CENTER);
  image(washingm, 10, 90, washingm.width / 3.7, washingm.height / 3.7);

pop();

push();

  if (ina == false){
    miagolio.play();
    miagolio.setVolume(0.9);
    ina = true;
  } 

pop();

push();

  textSize(32);
  textFont("Love Ya Like A Sister");
  strokeWeight(3);
  noStroke();
  stroke("#000000");
  fill("#ff5f02");
  text("Ops, wrong program", windowWidth / 2 - 700 , windowHeight / 2 - 300, 230, 300);

pop();

}

//if you press the fifth button
function program5(){

push();

  imageMode(CENTER);
  translate(width / 2, height / 2);  
  r = r + 0.3;
  rotate(r);  
  let prog5 = video.get();
  image(prog5, 0, 0, video.width / 1.9, video.height / 1.9);

pop();

push();

if ((mouseX > windowWidth / 2 - 140) && (mouseX < windowWidth / 2 + 100) && (mouseY > 350) && (mouseY < 580) && mouseIsPressed == true){
  program = 0;
} else if(mouseX > windowWidth / 2 - 192 && mouseX < windowWidth / 2 - 152 && mouseY > windowHeight / 2 - 142 && mouseY < windowHeight / 2 - 100 && mouseIsPressed == true){
    program = 1;
} else if(mouseX > windowWidth / 2 - 145 && mouseX < windowWidth / 2 - 115 && mouseY > windowHeight / 2 - 123 && mouseY < windowHeight / 2 - 79 && mouseIsPressed == true){
  program = 2;
} else if (mouseX > windowWidth / 2 - 96 && mouseX < windowWidth / 2 - 66 && mouseY > windowHeight / 2 - 136 && mouseY < windowHeight / 2 - 92 && mouseIsPressed == true){
  program = 3
} else if(mouseX > windowWidth / 2 - 46 && mouseX < windowWidth / 2 - 16 && mouseY > windowHeight / 2 - 147 && mouseY < windowHeight / 2 - 103 && mouseIsPressed == true){
  program = 4
}

pop();

push();

imageMode(CENTER); 
translate(windowWidth / 2, windowHeight / 2);
r = r + 0.3;
rotate(r);  
image(washingm, 0, 0, washingm.width / 3.7, washingm.height / 3.7);

pop();

ina = false;
miagolio.stop();

push();

textSize(32);
textFont("Love Ya Like A Sister");
strokeWeight(3);
noStroke();
stroke("#000000");
fill("#ff5f02");
text("Something went wrong, maybe you should stop doing laundry", windowWidth / 2 - 700 , windowHeight / 2 - 300, 300, 300);

pop();

}

//it creates a new bubble if you press with the mouse
function mousePressed(){

  append(bubblesoap, new Bubblesoap(mouseX, mouseY));

}

//to create the bubbles
class Bubblesoap  {
	constructor(tempx, tempy){
  	this.x = tempx;
    this.y = tempy;
    this.size = random(10, 50);
    this.r = 136;
    this.g = 194;
    this.b = 201;
  }
  
  move(){
  	this.x += random(-4, 4);
  	this.y += random(-5, -3);
    if (this.y < 0){
        this.y = random(height, height + 100);
        }
    if (this.x > width){
        this.x = 0;
        }
    if (this.x < 0){
    	this.x = width;
    }
  }
  
  show(){
    //noStroke();
  	stroke(255);
  	strokeWeight(2);
  	fill(this.r, this.g, this.b , 100);
  	ellipse(this.x, this.y, this.size, this.size);
  }
}