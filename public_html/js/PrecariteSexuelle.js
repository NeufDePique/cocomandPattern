//Tous les noms de variables auront pour thème la précarité sexuelle

var PutaClique = document.getElementById("PutaClick");
var ctx = PutaClique.getContext("2d");
var obstacleColumnCount  = 3;
var x = PutaClique.width/5;
var y = PutaClique.height-60;
var dx = 2;
var dy = -2;
var crousHeight = 75;
var crousWidth = 20;
var rightPressed = false;
var leftPressed = false;
var obstaclePadding = 2;
var score = 0;
var lives = 1;

base_image = new Image();
  base_image.src = 'images/student.png';

var obstacles = [];
for(var c=0; c<obstacleColumnCount; c++) {
  obstacles[c] = [];
  for(var r=0; r<obstacleColumnCount; r++) {
    obstacles[c][r] = { x: 0, y: 0};
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == '38') {
        rightPressed = true;
        console.log("bite");
    }
    else if(e.keyCode == '40') {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
  if(e.keyCode == '38') {
    rightPressed = false;
    console.log("bite");
}
else if(e.keyCode == '40') {
    leftPressed = false;
}
}

function collisionDetection() {
    for(var c=0; c<obstacleColumnCount; c++) {
        for(var r=0; r<obstacleColumnCount; r++) {
            var b = obstacles[c][r];
            if(x > b.x && x < b.x+crousWidth && y > b.y && y < b.y+crousHeight) {
              if(lives==0){
                alert("YOU LOSE");
                document.location.reload();
            }else
            lives--;
          }else{
            score++;
            }
        }
    }
}


function drawEtudiant() {
  ctx.beginPath();
  ctx.drawImage(base_image, x, y);
  ctx.closePath();
}
function drawLine() {
  ctx.beginPath();
  ctx.rect(0, PutaClique.height-60, PutaClique.width, 3);
  ctx.fillStyle = "#0095DD";
  ctx.fill();
  ctx.closePath();
}
function drawObstacles() {
  for(var c=0; c<obstacleColumnCount; c++) {
    for(var r=0; r<obstacleColumnCount; r++) {
        var obstacleX = (r*(crousWidth+obstaclePadding));
        var obstacleY = (c*(crousHeight+obstaclePadding));
        obstacles[c][r].x = obstacleX;
        obstacles[c][r].y = obstacleY;
        ctx.beginPath();
        ctx.rect(obstacleX, obstacleY, 10, 10);
        ctx.closePath();
    }
  }
}
function drawLives() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Lives: "+lives, PutaClique.width-65, 20);
}

function draw() {
  ctx.clearRect(0, 0, PutaClique.width, PutaClique.height);
  drawObstacles();
  drawEtudiant();
  drawLine();
  drawLives();
  collisionDetection();

  if(dy<0)
    dy++;
  else
    if(dy==0)
      dy++;

  if(dy>0)
      dy++;

  //x = PutaClique.width/3;
  //y = PutaClique.height-30;
  //dx = 3;
  //paddleX = (PutaClique.width-paddleWidth)/2;

  //x += dx;
  if(dy>0&&(y+dy)>0)
  y =0;
  else
  y+=dy;
  requestAnimationFrame(draw);
}

draw();
