img = "";
status = "";
objects = [];

function preload() {
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(380,380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectdetector = ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
}

function draw() {
    image(video,0,0,380,380);

    if(status != "") 
    {
        r = random(255); //used to generate random numbers
        g = random(255); //used to generate random numbers
        b = random(255); //used to generate random numbers
        objectdetector.detect(video,gotresult);
        for(i = 0; i<objects.length; i++) 
        {

            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : " + objects.length
            fill(r,g,b);
            percent = floor(objects[i].confidence*100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function modelLoaded() {
    console.log("Model is loaded");
    status = true; //used to keep track of cocossd whether it is loaded or not
}

function gotresult(error,results) {
    if(error) {
        console.log(error);
    }
    else{
        console.log(results);
        objects = results;
    }
}