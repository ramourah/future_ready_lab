//Define class Circle
function Circle(x, y, size, color, xSpeed, ySpeed){ //last 3 parameters optional
    this.xCoor = x;
    this.yCoor = y;
    this.diameter = size;
    this.color = color || [0, 0, 0]; //makes default color black
    this.xSpeed = xSpeed || 5;
    this.ySpeed = ySpeed || 7;
}
var circleList = [];

//Options for # of balls on screen
var ballsOnScreen = [2, 5, 9, 16];

//Setup is run once at the beginning before we draw. Canvas size + frame rate determined.
function setup() {
    canvasLength = parseInt(prompt("Enter the desired canvas length (x)."));
    while(isNaN(canvasLength) || canvasLength < 0){
        canvasLength = parseInt(prompt("Please enter a number for the length (x)."));
    }
//The while loop has been split in case the user decides that they want to play games and put letters for both variables. When there are two simple loops, the user cannot define the 2nd variable without inputting numbers for the first.
    canvasWidth = parseInt(prompt("Enter the desired canvas width (y)."));
    while(isNaN(canvasWidth) || canvasWidth < 0){
        canvasWidth = parseInt(prompt("Please enter a number for the width (y)."));
    }
    createCanvas(canvasLength, canvasWidth);
    frameRate(30);
    var ballOption = round(random(0, 3)); //Select a number of balls from the array
    background(255, 255, 255);
//Adds number of balls needed on screen
    for(var numOfBalls = 0; numOfBalls < ballsOnScreen[ballOption]; numOfBalls++){
//Adds new circle to array "balls" with random properties that comply to canvas boundaries. 
        circleList.push(new Circle(random(0, canvasWidth), random(0, canvasLength), random(0, 100), [random(0, 255), random(0, 255), random(0, 255)], random(1, 20)));
    }
}

//function to randomize colors of balls when they bounce
    function randomColor(){
    return [random(0,255), random(0,255), random(0,255)];
    }

//draw function is defined
function draw() {
    background (255, 255, 255); 
    for(var i = 0; i < circleList.length; i++){
        fill(circleList[i].color);
        ellipse(circleList[i].xCoor, circleList[i].yCoor, circleList[i].diameter);
        
//make circle bounce off sides
//when circle surpasses x boundaries (0 and canvasLength), change direction and color of circle.
//when circle surpasses y boundaries (0 and canvasWidth), change direction and diameter of circle. 
        if(circleList[i].xCoor > canvasLength || circleList[i].xCoor < 0){
            circleList[i].color = [random(0, 255), random(0, 255), random(0, 255)], //randomize color 
            circleList[i].xSpeed = -circleList[i].xSpeed; //reverse direction
            circleList[i].xCoor += circleList[i].xSpeed;
            circleList[i].xSpeed++;
        
            
        }else if(circleList[i].yCoor > canvasWidth || circleList[i].yCoor < 0){
            circleList[i].diameter = random(1, 100), //randomize size
            circleList[i].ySpeed = -circleList[i].ySpeed; //change direction
            circleList[i].yCoor += circleList[i].ySpeed;
            circleList[i].ySpeed--;
           
        }
            circleList[i].yCoor += circleList[i].ySpeed;
            circleList[i].xCoor += circleList[i].xSpeed;
            
            

    }
}
