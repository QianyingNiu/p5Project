////////////////////////////////////////////刷新跟新位置 矢量图形
let ellipseX = 80;
let ellipseY = 100;

////////////////////////////////////////////刷新跟新位置 图片
let monkeyX = 40;
let monkeyY = 40;

////////////////////////////////////////////放入图片
let peach;
let monkey;
let confuseGIF;
let hou;
let sai;
let lei;

function preload(){
  peach = loadImage("images/peach.png");
  monkey = loadImage("images/monkey.png");
  confuseGIF = createImg("images/confuse.gif");
  hou = loadImage("images/hou.png");
  sai = loadImage("images/sai.png");
  lei = loadImage("images/lei.png");

}

function setup() {
  ////////////////////////////////////////////静止代码

  // create canvas 500 by 500 px创建画布
  createCanvas(windowWidth, windowHeight);
  //刷新背景换色 rgb r两个数值控制变色速度
  //background(226, 253, 158);
  background(random(200, 230), random(253), random(158));
  //print(windowWidth);查看网页宽
  //change rectangle x,y coordinates to center of rect矩形中心
  //rectMode(CENTER);
  imageMode(CENTER);

  ////////////////////////////////////////////刷新跟新位置 矢量图形
  //ellipseX = random(ellipseX, windowWidth);
  //ellipseY = random(ellipseY, windowHeight);

  //刷新跟新位置 图片
  monkeyX = random(monkeyX, windowWidth);
  monkeyY = random(monkeyY, windowHeight);

  //noCursor();
  //print(ellipseX, ellipseY);
}

function draw() {
  ////////////////////////////////////////////动态代码/画形状

  //background(random(200, 230), random(253), random(158));

  //image(mac, windowWidth/2, windowHeight/2);
  smooth();

  ////////////////////////////////////////////刷新跟新位置 矢量图形
  //noStroke();
  //ellipse(ellipseX, ellipseY, 20, 20);
  //刷新跟新位置 图片
  image(monkey, monkeyX, monkeyY, 64, 64);


  ////////////////////////////////////////////鼠标轨迹实时跟踪
  //fill(120);
  //stroke(40, 100, 100, 40);
  //strokeWeight(10);
  //point(mouseX, mouseY);

  //图片位置/特效
  confuseGIF.position(350, 220);
  image(hou, 200, 300, 139, mouseY);
  image(sai, 600, 100, 139, mouseY);
  image(lei, 1000, 300, 139, mouseY);
  //image(lei, windowWidth/2, windowHeight/2, 400, mouseY);
  //image(tamagotchi, mouseX, mouseY, 380, 380);
  //image(furby, mouseX, mouseY, 409, 470);

  ////////////////////////////////////////////图片轨迹实时跟踪
  image(peach, mouseX, mouseY, 16.1, 17.05);
  print(mouseX);
}
