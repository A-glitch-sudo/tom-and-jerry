var cat
var mouse
var bgImg
var mouseImage
var catImage
var cat1Image
var cat2Image
var mouse2Image
var mouse1Image
var backgroundImg
function preload() {
    //load the images here
    console.log("Hello begining of preload")




    bgImg= loadImage("images/garden.png");
    mouseImage = loadImage("images/mouse1.png");
    catImage =  loadAnimation ("images/cat2.png","images/cat3.png");
    cat1Image = loadImage ("images/cat1.png");
    cat2Image = loadImage ("images/cat4.png");
    mouse2Image = loadImage ("images/mouse4.png")
    mouse1Image = loadAnimation("images/mouse2.png","images/mouse3.png")
    console.log("Hello end of preload")
}


function setup(){
    
    console.log("begining of setup");
    createCanvas(1000,1000);
    //create tom and jerry sprites here
    console.log("begining of setup....");

    cat = createSprite(700,800,100,100);
    cat.addAnimation ("cat Running",cat1Image);
    cat.scale = 0.1;

    mouse = createSprite (50,800,100,100);
    mouse.addAnimation("teasingCat",mouseImage);
    mouse.scale = 0.1;

    //garden = createSprite(1000,1000);
    //garden.addImage(bgImg);
    
}

function draw() {
//background(bgImg);
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if (cat.x - mouse.x < (cat.width - mouse.width)/2){
     mouse.addImage(mouse2Image);
     cat.addImage(cat2Image);
    }
    
    drawSprites();

//Text(mouseX + "," + mouseY,10,40);
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    
//cat.velocityX = -5;
//cat.addImage(" cat Running",cat1Image);
//cat.changeAnimation("cat Running",catImage);

//mouse.addAnimation("teasingCat",mouse1Image);

cat.velocityX = -5;

cat.addAnimation("cat Running",catImage);

mouse.addAnimation("teasingCat",mouse1Image);
mouse.framedelay = 25;

}

}
