//Create variables here
var changeGameState, readGameState, gameState;
var loadBedroom, loadGarden, loadBathroom, bg;
var dog, happyDog, database, foodS, foodStock, dogImg1, dogImg2, button1, button2, fedTime, lastFed, foodObj;
var hour = 0;
function preload(){
  //dogImg1 = loadImage("images/dogImg.png");
  //dogImg2 = loadImage("images/dogImg2.png");
  loadBedroom = loadImage("images/Bed Room.png");
  loadBathroom = loadImage("images/Wash Room.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250, 250, 50, 50);
  //dog.addAnimation("dog", dogImg1)
  foodStock = database.ref('Food');
  foodStock.on("value", readStock);
  foodObj = new Food();
  button1 = createButton("Feed Dog");
  button2 = createButton("Add Food");
  button1.position(300, 20);
  button2.position(400, 20);
  bg = loadGarden;
}


function draw() {  
  background(bg);
  drawSprites();
  //add styles here
  
}



