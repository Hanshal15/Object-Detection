img = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw() {
    image(img,0,0,640,420);
    rect(30,60,450,350);
    fill("#FF0000");
    stroke("#FF0000");
    noFill(); //Fill function gets unset
    text("Dog",45,75);
}