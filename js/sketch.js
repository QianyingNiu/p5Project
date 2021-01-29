

function setup() {
  // put setup code here to run once固定代码

  // create canvas 500 by 500 px创建画布
  createCanvas(windowWidth, windowHeight);

  background(255, 204, 0);

  //print(windowWidth);查看网页宽

  //change rectangle x,y coordinates to center of rect矩形中心
  rectMode(CENTER);
}

function draw() {
  smooth();

  //styles for the ellipse圆形颜色和描边
  noStroke();
  // put drawing code here to run in a loop循环代码/画形状
  ellipse(mouseX, mouseX, mouseY, 150);

  //styles for the rect矩形颜色和描边
  stroke(100, 255, 80);
  strokeWeight(20);
  fill(50, 200, 120);
  rect(800, 400, 200, 300);

  //styles for the triangle三角形颜色和描边
  stroke(40, 200, 100);
  strokeWeight(20);
  fill(50, 30, 120);
  triangle(1200, 50, 1300, 600, 950, 400);

  noFill();
  triangle(300, 400, 100, 400, mouseX, mouseY);

  //styles for the point鼠标轨迹实时跟踪
  fill(120);
  stroke(40, 280, 100);
  strokeWeight(10);
  //point is only x, y coordinates
  point(mouseX, mouseY);
  print(mouseX);

}
