img = "";
status = "";
objects = [];

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

    if(status != "") {
        for(i = 0; i<objects.length; i++) {

            document.getElementById("status").innerHTML = "Status: Detecting Objects";
            fill("#FF0000");
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
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
        object = results;
    }
}