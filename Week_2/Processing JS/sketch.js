//Define circle object
var circle={
    diameter:80,
    xCoor:0,
    yCoor:0,
    color:[255, 0, 0], //RGB values makes circle red
    xSpeed:5,
    ySpeed:5
    
}

//setup is run once at the beginning before we draw. Canvas size + frame rate determined.

function setup() {
    frameRate(30);
    createCanvas(640, 480);
    background(20, 66, 46);
}

//draw function is defined
function draw() {
    fill(circle.color);
    ellipse(circle.xCoor, circle.yCoor, circle.diameter);
   // circle.xCoor +=5;
   // circle.yCoor +=5
    

    
//make circle bounce off sides
//when circle surpasses x boundaries (0 and 640), change direction and color of circle.
//when circle surpasses y boundaries (0 and 480), change direction and diameter of circle. 
    if(circle.xCoor > 640 || circle.xCoor < 0){
        circle.color = [random(0, 255), random(0, 255), random(0, 255)], //randomize color 
        circle.xSpeed = -circle.xSpeed; //reverse direction
        circle.xCoor += circle.xSpeed;
    }else if(circle.yCoor > 480 || circle.yCoor < 0){
        circle.diameter = random(1, 100), //randomize size
        circle.ySpeed = -circle.ySpeed; //change direction
        circle.yCoor += circle.ySpeed;
    }else{
        circle.yCoor += circle.ySpeed;
        circle.xCoor += circle.xSpeed;
    }

}
