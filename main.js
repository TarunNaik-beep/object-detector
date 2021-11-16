img = "";
myStatus = "";


function preload() {
    
    img = loadImage("dog_cat.jpg");
}

function setup() {
    canvas = createCanvas(640,420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detecting objects";
}

function draw() {
    image(img,0,0,640,420);
    fill("#FF0000");
    text("DOG",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);

    fill("#FF0000");
    text("CAT",320,120);
    noFill();
    stroke("#FF0000");
    rect(300,90,270,320);
}

function modelLoaded() {
    console.log(modelLoaded);
    myStatus = true;
    object_detector.detect(img,gotResult);
}

function gotResult(error, results) {
    if(error) {
        console.error(error);
    }
    else {
        console.log(results);
    }
}