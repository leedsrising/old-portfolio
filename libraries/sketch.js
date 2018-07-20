// Modified from author Grace Guan's original version
var NUMSINES = 30; // how many of these things can we do at once?
var sines = new Array(NUMSINES); // an array to hold all the current angles
var rad; // an initial radius value for the central sine
var i; // a counter variable

// play with these to get a sense of what's going on:
var fund = 0.025; // the speed of the central sine
var ratio = 1; // what multiplier for speed is each additional sine?
var alpha = 50; // how opaque is the tracing system

function setup() {
  createCanvas(windowWidth, windowHeight);
  rad = height/4; // compute radius for central circle
  background(0); // clear the screen
  for (var i = 0; i<sines.length; i++) {
    sines[i] = PI; // start EVERYBODY facing NORTH
  }
}

function draw() {
  background(0);
  stroke(0, 255); // black pen
  noFill(); // don't fill

  // MAIN ACTION
  push(); // start a transformation matrix
  translate(width/2, height/2); // move to middle of screen

  for (var i = 0; i<sines.length; i++) {
    var erad = 0; // radius for small "point" within circle... this is the 'pen' when tracing
    // setup for tracing
    stroke(248, 131, 121*(float(i)/sines.length), alpha); // blue
    fill(248, 131, 121, alpha/2); // also, um, blue
    erad = 5.0*(1.0-float(i)/sines.length); // pen width will be related to which sine
    var radius = rad/(i+1); // radius for circle itself
    rotate(sines[i]); // rotate circle
    push(); // go up one level
    translate(0, radius); // move to sine edge
    ellipse(0, 0, erad, erad); // draw with erad if tracing
    pop(); // go down one level
    translate(0, radius); // move into position for next sine
    sines[i] = (sines[i]+(fund+(fund*i*ratio)))%TWO_PI; // update angle based on fundamental
  }
  
  pop(); // pop down final transformation
  
}
