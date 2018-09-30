new p5();
  
  var canvas;

  function setup () {
    canvas = createCanvas(400, 400);
    canvas.position(150, 150);
    background(255);
    frameRate(25);
}

  function draw() {
      var ranColor = random(256);
      var ranColor2 = random(256);
      var ranColor3 = random(256);
      var ranColorAlpha = random(22, 100);
      
      var x = 0;
      
      while (x < 50) {
        x++;
      }
      
      fill(ranColor, ranColor2, ranColor3);

      ellipse(mouseX, mouseY, 90, 90);
      
    if(frameCount == 200) {
        noLoop();
      }
  }