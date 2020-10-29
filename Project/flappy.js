let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
let button = document.getElementById("restartBtn");
button.addEventListener("click", restartGame);



let bird = new Image();
let bg = new Image();
let ground = new Image();
let up = new Image();
let down = new Image();



let fly = new Audio();
let score_num = new Audio();
let game_over = new Audio();


//png files
bird.src = "img/bird.png";
bg.src = "img/canva.png";
ground.src = "img/ground.png";
up.src = "img/5.png";
down.src = "img/6.png";


//audio files
fly.src = "audio/fly.mp3";
score_num.src = "audio/score.mp3";
game_over.src = "audio/over.mp3"

//space between blocks
let a  = 90;

//start bird moving after keydown
document.addEventListener("keydown", moveUp);

//reload page
function restartGame(){
  location.reload();
}


//change bird position
function moveUp(){
  yPos -= 25;
  fly.play();
}


//creating blocks
let pipe = [];
pipe[0] = {
  x : cnv.width,
  y : 0
}

//bird position
let score = 0;
let xPos = 10;
let yPos = 150;
let grav = 1.5;
let state = true;

 
function draw(){
  ctx.drawImage(bg, 0, 0);
    for(let i = 0; i < pipe.length; i++){
     ctx.drawImage(up, pipe[i].x, pipe[i].y);
     ctx.drawImage(down, pipe[i].x, pipe[i].y + up.height + a);
     pipe[i].x--;

    if(pipe[i].x == 125){
      pipe.push({
        x : cnv.width,
        y : Math.floor(Math.random() * up.height) - up.height
      })
    }
    
    //checking touches
    if(xPos + bird.width >= pipe[i].x 
      && xPos <= pipe[i].x + up.width
        && (yPos <= pipe[i].y + up.height
        || yPos + bird.height >= pipe[i].y + up.height + a)
        || yPos + bird.height >= cnv.height - ground.height){
          end();
        } 
        if(pipe[i].x == 5){
          score++;
          score_num.play();
        }    
      }
  ctx.drawImage(ground, 0, cnv.height - ground.height);
  ctx.drawImage(bird, xPos, yPos);
  yPos += grav;

  //creating score text
  ctx.fillStyle = "#000";
  ctx.font = "20px Comic Sans MS";
  ctx.textAlign = "left";
  ctx.fillText("Score: " + score, 10, 20);
  if(state){
    requestAnimationFrame(draw);
  }else{
    cancelAnimationFrame(draw);
  }
}


//game over
function end(){
  state = false;
  game_over.play();
  ctx.font = "30px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.textAlign = "center";
  button.style.visibility = "visible";

  //save data in LocalStorage
  let new_data = score;
  if(localStorage.getItem("Score") == null){
    localStorage.setItem("Score", "[]");
  }
  let old_data = JSON.parse(localStorage.getItem("Score"));
  old_data.push(new_data);
  localStorage.setItem("Score", JSON.stringify(old_data));

  //find best score
  let best = 0;
    for(let i = 0; i < JSON.parse(localStorage.getItem("Score")).length; i++){
      if(JSON.parse(localStorage.getItem("Score"))[i] > best){
        best = JSON.parse(localStorage.getItem("Score"))[i];
      }
    } 
  let text_score = document.getElementById("score");
  text_score.innerHTML = `Score: ${score} </br> Best score: ${best} `;
}
down.onload = draw;


