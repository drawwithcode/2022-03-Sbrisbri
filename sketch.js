let disco01;
let songs = [];
let amp01;
let volume01;
let artist;
let bg;

//Load sounds and images
function preload(){
  disco01 = loadImage("./Assets/Images/Cerchio Disco 1 original.png");
  artist = loadImage("./Assets/Images/Neil Harbisson.png");
  songs[0] = loadSound("./Assets/Sounds/A taste of honey.mp3");
  songs[1] = loadSound("./Assets/Sounds/Everybody loves saturday night.mp3");
  songs[2] = loadSound("./Assets/Sounds/He is got the whole world in his hands.mp3");
  songs[3] = loadSound("./Assets/Sounds/What kind of fool am I.mp3");
  songs[4] = loadSound("./Assets/Sounds/Blue danube waltz.mp3");
  bg = loadImage("./Assets/Images/Background.png");

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  amp01 = new p5.Amplitude();
  amp01.setInput(songs[0]);
  amp01.setInput(songs[1]);
  amp01.setInput(songs[2]);
  amp01.setInput(songs[3]);
  amp01.setInput(songs[4]);
  songs[0, 1, 2, 3, 4].play();
  songs[0, 1, 2, 3, 4].stop();
  noStroke();
}

function draw() {
  image(bg, windowWidth / 2, windowHeight / 2, bg.width, bg. height); //Background image

  //Title of the record
  push();
  let x = random(-2, 2);
  let y = random(-2, 2);
  textFont("Electrolize");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  fill(251, 179, 175, 120);
  text("Million Dollar Look", windowWidth / 2 + 30 + x , 100 + 30 + y);
  fill(33, 149, 231, 120);
  text("Million Dollar Look", windowWidth / 2 - 20 + x , 100 + 20 + y);
  fill(225, 39, 40, 120);
  text("Million Dollar Look", windowWidth / 2 + 20 + x , 100 - 20 + y);
  fill(229, 220, 31, 120);
  text("Million Dollar Look", windowWidth / 2 - 10 + x , 100 - 10 + y);
  fill(74, 232, 224, 120);
  text("Million Dollar Look", windowWidth / 2 + 10 + x , 100 + 10 + y);
  fill(0);
  text("Million Dollar Look", windowWidth / 2, 100);
  pop();

  //Playlist
  push();
  textFont("Electrolize");
  fill(0);
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(18);
  text("01. A taste of honey", windowWidth / 2 - 430, windowHeight / 2 - 100);
  text("02. Everybody loves saturday night", windowWidth / 2 - 430, windowHeight / 2 - 50);
  text("03. He is got the whole world in his hands", windowWidth / 2 - 430, windowHeight / 2);
  text("04. What kind of fool am I", windowWidth / 2 - 430, windowHeight / 2 + 50);
  text("05. Blue danube waltz", windowWidth / 2 - 430, windowHeight / 2 + 100);
  pop();

  //How to play each songs by interacting with the keyboard
  push();
  textFont("Electrolize");
  fill(0);
  textStyle(ITALIC);
  textAlign(CENTER);
  textSize(18);
  text("01. Press 1 to play, s to stop", windowWidth / 2 + 430, windowHeight / 2 - 100);
  text("02. Press 2 to play, s to stop", windowWidth / 2 + 430, windowHeight / 2 - 50);
  text("03. Press 3 to play, s to stop", windowWidth / 2 + 430, windowHeight / 2);
  text("04. Press 4 to play, s to stop", windowWidth / 2 + 430, windowHeight / 2 + 50);
  text("05. Press 5 to play, s to stop", windowWidth / 2 + 430, windowHeight / 2 + 100);
  pop();

  //Explanation at the bottom
  push();
  noFill();
  stroke(0);
  strokeWeight(2);
  rect(0, 620, 1630, 60);
  pop();
  push();
  textSize(14);
  textFont("Electrolize");
  textAlign(CENTER);
  fill(0);
  text("This is an example of Sonochromatic records by Neil Harbisson. Interact with the keyboard to find out what the colors of the songs on this LP are.", windowWidth / 2, 653.5);
  pop();

  //Show the image of the artist
  image(artist, 50, 600, artist.width / 4, artist.height / 4);

  //Circle size depending on amplitude
  translate(windowWidth / 2, windowHeight / 2);
  volume01 = amp01.getLevel();
  volume01 = map(volume01, 0, 1, 0, 1.2 * height);
  fill(74, 232, 224);
  ellipse(0, 0, volume01 + 180);
  fill(229, 220, 31);
  ellipse(0, 0, volume01 + 145);
  fill(225, 39, 40);
  ellipse(0, 0, volume01 + 110);
  fill(33, 149, 231);
  ellipse(0, 0, volume01 + 75);
  fill(251, 179, 175);
  ellipse(0, 0, volume01 + 40);

  //Image of the record
  push();
  fill(0);
  circle(0, 0, 180, 180);
  rotate(frameCount / 20);
  image(disco01, 0, 0, 120, 120);
  pop();

}

//Interactions with the keyboard to play or stop the songs
function keyPressed(){
  if(key == "1"){
    songs[0].play();
    songs[1].stop();
    songs[2].stop();
    songs[3].stop();
    songs[4].stop();
  } else if(key == "s"){
    songs[0].stop();
  }

  if(key == "2"){
    songs[1].play();
    songs[0].stop();
    songs[2].stop();
    songs[3].stop();
    songs[4].stop();
  } else if(key == "s"){
    songs[1].stop();
  }

  if(key == "3"){
    songs[2].play();
    songs[0].stop();
    songs[1].stop();
    songs[3].stop();
    songs[4].stop();
  } else if(key == "s"){
    songs[2].stop();
  }

  if(key == "4"){
    songs[3].play();
    songs[0].stop();
    songs[1].stop();
    songs[2].stop();
    songs[4].stop();
  } else if(key == "s"){
    songs[3].stop();
  }

  if(key == "5"){
    songs[4].play();
    songs[0].stop();
    songs[1].stop();
    songs[2].stop();
    songs[3].stop();
  } else if(key == "s"){
    songs[4].stop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  }
