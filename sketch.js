let logic;
let player;
let font;
let fontB;
let prueba;

function setup() {
  createCanvas(1920, 1080);
  logic = new Logic(this);
  player = new MusicPlayer(this);
  font = loadFont('sources/framd.ttf');
  fontB = loadFont('sources/FranklinGothic.ttf');
  prueba = loadImage('sources/HSM1 T.png');
}

function draw() {
  background(220);
  logic.showScreen();
  
  player.drawSongs(logic.screen);
  //player.showPlaying();
  /*image(prueba,0,0);
  textFont(fontB);
      fill(255);
      textSize(51);
      text('TITULO CANCIÓN',98,635);
      textSize(22);
      text('ARTISTA',98,754);
      text('TITULO CANCIÓN',140,943);
      textFont(font);
      text('DETALLES',98,790);
      //BARRA
      textSize(17);
      text('DETALLES',140,970);
      */

}

function mousePressed() {
  console.log('x:' + mouseX + 'y:' + mouseY);
  player.playPlaylist(logic.screen);
  player.playSongBySong(logic.screen);
  switch (logic.screen) {
    case 0:
      if (mouseX > 197 && mouseY > 640 && mouseX < 554 && mouseY < 998) {
        logic.screen = 1;
      }
      if (mouseX > 584 && mouseY > 640 && mouseX < 945 && mouseY < 998) {
        logic.screen = 2;
      }
      if (mouseX > 976 && mouseY > 640 && mouseX < 1333 && mouseY < 998) {
        logic.screen = 3;
      }
      if (mouseX > 1361 && mouseY > 640 && mouseX < 1722 && mouseY < 998) {
        logic.screen = 4;
      }
      break;
    case 1:
      if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
        logic.screen = 0;
      }
      
      
      break;
    case 2:
      if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
        logic.screen = 0;
      }
      break;
    case 3:
      if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
        logic.screen = 0;
      }
      break;
    case 4:
      if (mouseX > 347 && mouseY > 32 && mouseX < 486 && mouseY < 52) {
        logic.screen = 0;
      }
      break;
  }
  
  
}