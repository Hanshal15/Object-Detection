img = "";
status = "";

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(img,0,0,640,420);
    rect(30,60,450,350);
    fill("#FF0000");
    stroke("#FF0000");
    noFill(); //Fill function gets unset
    text("Dog",45,75);

    rect(300,90,270,320);
    fill("#FF0000");
    stroke("#FF0000");
    noFill();
    text("Cat",320,120);
}

function modelLoaded() {
    console.log("Model is loaded");
    status = true; //used to keep track of cocossd whether it is loaded or not
    objectdetector.detect(img,gotresult);
}

function gotresult(error,results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
    }
}