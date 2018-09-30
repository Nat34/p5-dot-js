new p5();
  
  var canvas;

  function setup () {
    canvas = createCanvas(1800, 880);
    canvas.position(350, 50);
    background(255);
    frameRate(25);
    alert('may cause epilepsy!');
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
      beginShape();
      vertex(180,x+2);
      vertex(207,x+1);
      vertex(214,x+80);
      vertex(407,x+30);
      vertex(412,x+80);
      vertex(219,x+19);
      vertex(226,x+20);
      endShape(CLOSE);
      
      
      
      ellipse(mouseX, mouseY, 120, 120);
      
    if ( (frameCount > 60) && (frameCount < 80) ) {
          ellipse(mouseX, mouseY, 200, 200);
      } else if(frameCount == 140) {
          //save(canvas, 'myCanvas.jpg');
        noLoop();
      }
  }