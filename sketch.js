var hr, mn, sc;
var hrAngle, mnAngle, scAngle; 
var bgImg;

function preload(){
    bgImg= loadImage("bg1.jpeg")
}
function setup()
{
    createCanvas(1365, 625); 


    angleMode(DEGREES);

    strokeWeight(10);
    stroke("black")
    textSize(80);
}

function draw()
{
    background(bgImg);

    fill("orange");
    text("~The Indian Clock~", 100, 300);

    fill("white")
    stroke("black")
    textSize(40)
    strokeWeight(5);
    text("INDIAN TIME",300,400)

    strokeWeight(10);

    translate(1100, 300);
    rotate(-90);

    hr = hour();
    mn = minute();
    sc = second();

    scAngle = map(sc, 0, 60, 0, 360);
    mnAngle = map(mn, 0, 60, 0, 360);
    hrAngle = map(hr % 12, 0, 12, 0, 360);

    push();
    rotate(hrAngle);
    stroke("yellow");
    line(0, 0, 50, 0);
    pop();

    push();
    rotate(mnAngle);
    stroke("orange");
    line(0, 0, 75, 0);
    pop();

    push();
    rotate(scAngle);
    stroke("red");
    line(0, 0, 100, 0);
    pop();

    noFill();
    stroke("yellow");
    arc(0, 0, 240, 240, 0, hrAngle);

    stroke("orange");
    arc(0, 0, 260, 260, 0, mnAngle);

    stroke("red");
    arc(0, 0, 280, 280, 0, scAngle);
}