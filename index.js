/*ctx.measureText(variable)*/
/*w3schools.com/tags/ref_canvas.asp*/
let MX,MY,place,skincolor,spd,x,y,lobbylength,lobbyheight,trail,headdirection,floorboard,floorintervals,jump,starty,j,jumpything,score,yyy,endscene,nodeList,node1,node2,node3,node4,node5,node6,node7,node8,X,Y,homescreen,header,homeSlider,doTransition,ded,hscore,scores,cool,rando,lobbyd,Demonx,dRight;
dRight = true;
Demonx = 0;
lobbyd = 0

cool = 0;
scores = [];
hscore = 0;
ded = false;
doTransition = false;
homeSlider = 800
header = "- Doodle  Jump -";
homescreen = true;
endscene = false;
jumpything = [];
score = 0;
boost = false;
let fruit = []
let anana = Math.floor(Math.random()*10);
for (i=0;i<480;i++){
  b = Math.floor(Math.random()*1170);
  anana = Math.floor(Math.random()*10)
  banana =[b,anana]
  //Lol
  jumpything.push(banana);

}

j = true;
jump = 0;
stary = 0;
floorintervals = [];
for (x = 0;x<100;x++){
  a = Math.floor(Math.random()*10);
  floorintervals.push(a);
}
let Demons = [];
for (i = 0;i<60;i++){
  a = -1 * Math.floor(Math.random()*30000)
  Demons.push(a);
}
trail = [];
headdirection = 'left';
lobbylength = 2000;
lobbyheight = 2000;
skincolors = ['#ff5e23','#ef2323','#ffc61c','#11d81e','#11d81e',"#11d8d8","#118fd8","#114cd8","#664ed3","#a84ed2","#d14dc4","#61acdd"]
place = 'lobby';
rando = 0;
skincolor = skincolors[Math.floor(Math.random()*skincolors.length)];
spd = 13;
x = 1000;
y = 0;
yyy = 273;

let keyDown = {
	KEYMAP: {
		backspace: 8,
		space: 32,
		esc: 27,
		pageUp: 33,
		pageDown: 34,
		end: 35,
		home: 36,
		left: 37,
		up: 38,
		right: 39,
		down: 40,
		insert: 45,
		delete: 46,
		0: 48,
		1: 49,
		2: 50,
		3: 51,
		4: 52,
		5: 53,
		6: 54,
		7: 55,
		8: 56,
		9: 57,
		a: 65,
		b: 66,
		c: 67,
		d: 68,
		e: 69,
		f: 70,
		g: 71,
		h: 72,
		i: 73,
		j: 74,
		k: 75,
		l: 76,
		m: 77,
		n: 78,
		o: 79,
		p: 80,
		q: 81,
		r: 82,
		s: 83,
		t: 84,
		u: 85,
		v: 86,
		w: 87,
		x: 88,
		y: 89,
		z: 90,
		numpad0: 96,
		numpad1: 97,
		numpad2: 98,
		numpad3: 99,
		numpad4: 100,
		numpad5: 101,
		numpad6: 102,
		numpad7: 103,
		numpad8: 104,
		numpad9: 105,
		multiple: 106,
		add: 107,
		subtract: 109,
		decimalPoint: 110,
		divide: 111,
		shift: 16,
		semicolon: 186,
		grav: 192,
		comma: 188,
	},
	pressedKeys: {},
	keyEvents: function() {
		window.addEventListener(
			'keydown',
			function(e) {
				keyDown.pressedKeys[e.keyCode] = true;
        doTransition = true;
			},
			false
		);
		window.addEventListener(
			'keyup',
			function(e) {
				keyDown.pressedKeys[e.keyCode] = false;
			},
			false
		);
	},
  Mouse: function() {
		window.addEventListener(
			'click',
			function(e) {
				null
			},
			false
		);
		window.addEventListener(
			'mousemove',
			function(e) {
				MX = e.offsetX;
				MY = e.offsetY;
			},
			false
		);
	},
};
function drawLine(f, ff, t, tt) {
	ctx.moveTo(f, ff);
	ctx.lineTo(t, tt);
	ctx.stroke(); 
}
function draw(){
  drawLobby();
  drawCharacter();
}
function drawCharacter(){
  if (score > -10){
    x = 1300/2-25;
  }
  ctx.fillStyle = skincolor;
  ctx.lineWidth = 4;
  ctx.strokeStyle = 'black';
  ctx.fillRect(x,yyy,50,50);
  ctx.strokeRect(x,yyy,50,50);
  ctx.fillStyle = 'black';
  if (headdirection == "left"){
    ctx.fillRect(5+x,yyy+14,5,15);
    ctx.fillRect(25+x,yyy+14,5,15);
  }else if (headdirection == "right"){
    
    
    ctx.fillRect(40+x,yyy+14,5,15);
    ctx.fillRect(20+x,yyy+14,5,15);
  }
  
  
}
function drawLobby(){
  ctx.strokeStyle = 'black';
  ctx.fillStyle = '#b59ee2'
ctx.fillRect(0,-2000-y,canvas.width,2000);
ctx.strokeRect(0,-2000-y,canvas.width,2000);
ctx.fillStyle = '#6890e8'
ctx.fillRect(0,-5000-y,canvas.width,3000);
ctx.fillStyle = '#6abaf7';
ctx.fillRect(0,-9000-y,canvas.width,4000);
ctx.fillStyle = '#60c168';
ctx.fillRect(0,-13000-y,canvas.width,4000);
ctx.fillStyle = '#efe683';
ctx.fillRect(0,-18000-y,canvas.width,5000);
ctx.fillStyle = '#edb55c';
ctx.fillRect(0,-22000-y,canvas.width,4000);
ctx.fillStyle = '#ff715b';
ctx.fillRect(0,-25000-y,canvas.width,3000);
ctx.fillStyle = '#e970ff';

ctx.fillRect(0,-31000-y,canvas.width,6000);
ctx.fillStyle = 'violet';
ctx.font = '900 31px Sans MS';

ctx.fillRect(0,-2000-y,canvas.width,75)
ctx.strokeRect(0,-2000-y,canvas.width,75);;
ctx.fillStyle = 'black'
  ctx.fillText("Level I",450,-360-y);

  ctx.fillStyle = 'black'
  ctx.fillText("Level II",650,-1960-y);
  ctx.fillStyle = '#4d5ebc';
ctx.fillRect(0,-5000-y,canvas.width,75);
ctx.strokeRect(0,-5000-y,canvas.width,75);
  ctx.fillStyle = 'black'
  ctx.fillText("Level III",150,-4960-y);
  ctx.fillStyle = '#42a7f4'
ctx.fillRect(0,-9000-y,canvas.width,75);
ctx.strokeRect(0,-9000-y,canvas.width,75);
  ctx.fillStyle = 'black'
  ctx.fillText("Level IV",850,-8960-y);
  ctx.fillStyle = 'lawngreen'
ctx.fillRect(0,-13000-y,canvas.width,75);
ctx.strokeRect(0,-13000-y,canvas.width,75);
  ctx.fillStyle = 'black'
  ctx.fillText("Level V",750,-12960-y);
ctx.fillStyle = 'yellow'
ctx.fillRect(0,-18000-y,canvas.width,75);
ctx.strokeRect(0,-18000-y,canvas.width,75);
  ctx.fillStyle = 'black'
  ctx.fillText("Level VI",650,-17960-y);
  ctx.fillStyle = 'orange'
ctx.fillRect(0,-22000-y,canvas.width,75);
ctx.strokeRect(0,-22000-y,canvas.width,75);
  ctx.fillStyle = 'black'
  ctx.fillText("Level VII",550,-21960-y);
  ctx.fillStyle = '#c65141'
ctx.fillRect(0,-25000-y,canvas.width,75);
ctx.strokeRect(0,-25000-y,canvas.width,75);
  ctx.fillStyle = 'black'
  ctx.fillText("Level VIII",450,-24960-y);
  ctx.fillStyle = '#ff54f0'
  ctx.fillRect(0,-31000-y,canvas.width,75);
  ctx.strokeRect(0,-31000-y,canvas.width,75);
  ctx.fillStyle = 'black'
  ctx.fillText("Level IX",200,-30975-y);
 ctx.fillText("this is the end my frieenndddddddd...",200,-32480-y);
if (y/2< score){
  score = Math.floor(y/2);
}
  ctx.lineWidth = 4;
  ctx.fillStyle = 'dimgrey';
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'dimgrey';
  ctx.strokeRect(0,290-y,canvas.width,1000);
  ctx.fillRect(0,290-y,canvas.width,1000);
  
  //Demons




  //END OF Demons
  ctx.fillStyle = 'black';
  for (b = 1;b<jumpything.length;b++){
    ctx.fillStyle = 'black';
    ctx.lineWidth = 1;
    if (b === jumpything.length/2){
      ctx.fillStyle = 'gold';
    if (b > jumpything.length/2){
      ctx.fillRect(jumpything[b][0]-2,324 - ((b-jumpything.length/2) * 140)-y,114 + (score)/200,5)
      
      ctx.strokeRect(jumpything[b][0]-2,324 - ((b-jumpything.length/2) * 140)-y,114 + (score)/200,5)
      if (jumpything[b][1] === 1){
        boost = true;
      }
    }else{
      ctx.fillRect(jumpything[b][0]-2,324 - (b * 140)-y,114 + (score)/200,5)
     ctx.strokeRect(jumpything[b][0]-2,324 - (b * 140)-y,114 + (score)/200,5)
    
    }
    }else{
    if (b > jumpything.length/2){
      ctx.fillRect(jumpything[b][0],325 - ((b-jumpything.length/2) * 140)-y,110 + (score)/200,3)
      
    }else{
      ctx.fillRect(jumpything[b][0],325 - (b * 140)-y,110 + (score)/200,3)
      
    }
    }
    
  }
  
ctx.fillStyle = '#909caf';
  ctx.fillRect(0,0,canvas.width,100);
  ctx.strokeRect(0,0,canvas.width,100);
  ctx.fillStyle = 'black';
  ctx.fillStyle = 'lightgrey';
  ctx.lineWidth= 4;
  ctx.fillRect(525,-15,250,130);
  ctx.fillStyle = '#909caf';
  ctx.fillRect(0,canvas.height-50,canvas.width,50);
  
  ctx.strokeRect(525,-15,250,130);
  ctx.strokeRect(-50,canvas.height-50,canvas.width+150,50);
  
  ctx.fillStyle = 'black';
  ctx.fillText("Score: " + -1 * score,575,60)
  ctx.fillRect(-15,0,homeSlider,canvas.height);
  ctx.fillRect(1315-homeSlider,0,1000,canvas.height);
  ctx.fillRect(0,-15,canvas.width,homeSlider)
  ctx.fillRect(0,715-homeSlider,canvas.width,1000)
  if (ded & homeSlider < 800){
    homeSlider += (homeSlider/20 + 1);
  }else if (homeSlider > -5){
    homeSlider -= (homeSlider/20 + 1);
  }
  
  }
    
function jumpy(jumppower,grav){
 
  if (jump < 0 && score < -16850){
    if (score > -17200){
      y -= 8
    }else{
      yyy -= 8
      homeSlider += (homeSlider/20 + 1);
      

    }
  
  }else{



 if (jump === -10000 && y === 0){
    jump = jumppower
    starty = y
  }

  y -= jump
  
  jump -= grav
  
  if (jump < -35){
    
    ded = true
    
  }
  for (a = 0;a<jumpything.length;a++){



      if (jump < 0 && y <= 4 && y > -40){
        j = false
        jump = jumppower
      }
      else if (jump < 0  && x > jumpything[a][0]-50 && x < jumpything[a][0]+ 110 + ( score)/200 && y <=  a * -140 + (Math.abs(jump)* 1) && y >=  a * -140 || y > -1 * (Math.abs(jump))){
      y = -1 * (a * 140)
      if (y > -1 * jump){
        y = 0;
      }
        j = false
        jump = jumppower
        if (jumpything[a][1] < 10){
        boost = true;
      }
      }else if (jump < 0  && x > jumpything[a][0]-50 && x < jumpything[a][0]+ 110 + (  score)/200 && y <=  (a - jumpything.length/2) * -140 + (Math.abs(jump)* 1) && y >=  (a - jumpything.length/2) * -140 || y > -1 * (Math.abs(jump))){
        if (y > -1 * jump){
        y = 0;
      }
        j = false
        jump = jumppower
        if (jumpything[a][1] < 10){
        boost = true;
      }
      }
  }
  } 
}
 

function input(){
 if (keyDown.pressedKeys[keyDown.KEYMAP['w']]) {
		y =-33000
	}
  if (keyDown.pressedKeys[keyDown.KEYMAP['a']]) {
		x -= spd;
    headdirection = 'left';
    if (x < -50){
      x = 1300
    }
	}
  if (keyDown.pressedKeys[keyDown.KEYMAP['d']]) {
		x += spd;
    headdirection = 'right';
    if (x > 1300){
      x = -50
    }
	}
 
		if ( j === false){
      
      jumpy(15,.5);
      j = true;
    }
	
  if (j){
    
    if (boost){
      jumpy(40,.5);
      boost = false;
    }else{
      jumpy(15,.5);
    }
  }
}
function drawHome(){
  cool += 1
  
  ctx.fillStyle = '#8aaccc';
  ctx.strokeStyle = 'black';
  ctx.lineWidth = 5;
  ctx.fillRect(250,100,800,150);
  ctx.strokeRect(250,100,800,150);
  ctx.fillStyle = 'white';
  ctx.font = '80px serif'
  ctx.fillStyle = skincolors[rando];
  if (cool > 25){
    rando ++;
    if (rando > skincolors.length){
      rando = 0
    }
    cool = 0
  }else{
    cool ++
  }
  ctx.fillText(header,1300/2-(ctx.measureText(header).width/2),200);
  ctx.fillStyle = 'black';
  ctx.font = '35px serif'
  ctx.fillText("Press key to Play",1300/2-(ctx.measureText("Press key to Play").width/2),400);
  if (scores.length > 0){
    ctx.fillText("You Died",1300/2-(ctx.measureText("You Died").width/2),350);
    ctx.fillStyle = 'lightgrey';
    ctx.fillRect(450,450,400,200);
    ctx.strokeRect(450,450,400,200);
    ctx.font = '35px serif'
   
     ctx.fillStyle = '#8aaccc';
    ctx.fillRect(445,450,400,200);
    ctx.strokeRect(445,450,400,200);
     ctx.fillStyle = 'black';
    ctx.fillText("HIGHSCORE:" + -1 *hscore,1300/2-(ctx.measureText("HIGHSCORE: " + -1 *hscore).width/2),525)
    ctx.fillText("LAST SCORE:" + -1 *scores[scores.length-1],1300/2-(ctx.measureText("LAST SCORE: " + -1 *scores[scores.length-1]).width/2),575)
ctx.font = '35px serif'
  }
  ctx.fillRect(-15,0,homeSlider,canvas.height);
  ctx.fillRect(1315-homeSlider,0,1000,canvas.height);
  ctx.fillRect(0,-15,canvas.width,homeSlider)
  ctx.fillRect(0,715-homeSlider,canvas.width,1000)
  if (doTransition){
    homeSlider += (homeSlider/20 + 1);
    if (homeSlider > 800){
      homescreen = false;
      
    }
  }else if (homeSlider > -5){
    homeSlider -= (homeSlider/20 + 1);
  }
  
}
function doFrameLoop1(){
  ctx.clearRect(0,0,canvas.width,canvas.height)
  if (homescreen){
    ctx.font = '48px serif';
    drawHome();
    
  }else if (!homescreen){
    ctx.font = '30px serif';
  if (ded){
    doTransition = true
    draw();
    if (jump > 0){
    jump = -30;
    }
    yyy -= jump
    if (yyy > 3000){
      console.log(yyy)
      ded = false
      scores.push(score);
//////////////////////////////////////////////////////////////////////////////////////////////////////



//////////////////////////////////

//////////////////////////////////


//////////////////////////////////
//////////////////////////////////

//////////////////////////////////
      hscore = scores[0];
      for (i = 1;i<scores.length;i++){
        if (scores[i]>scores[i-1]){
          hscore = scores[i]
        }
      }
      score = 0
      jump = 0
      jumppower = 0
      y = 0
      yyy = 273
      homescreen = true
      doTransition = false
      skincolor = skincolors[Math.floor(Math.random()*skincolors.length)];
    }
  }else{
  draw();
  input();

   draw2();
  input2();
  text();
  }
  }
  window.requestAnimationFrame(doFrameLoop1);
}

window.onload = function() {
 	ctx = canvas.getContext('2d'); 
	canvas =  document.getElementById('canvas');
  canvas.width  = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  

	keyDown.keyEvents();
	keyDown.Mouse();
  
  window.requestAnimationFrame(doFrameLoop1);
};



 

x = 300
y = 300


node1 = [0,-100,150]
node2 = [0,-100,200]
node3 = [0,100,150]
node4 = [0,100,200]
node5 = [50,100,200]
node6 = [50,100,150]
node7 = [50,-100,150]
node8 = [50,-100,200]

node9 = [150,-100,150]
node10 = [150,-100,200]
node11= [150,100,150]
node12 = [150,100,200]
node13 = [200,100,200]
node14 = [200,100,150]
node15 = [200,-100,150]
node16 = [200,-100,200]

node17 = [150,50,200]
node18= [150,50,150]
node19 = [50,-50,150]
node20 = [50,-50,200]


/*
node17 = [0,-50,0]
node18 = [-400,150,-400]
node19 = [-400,150,800]
node20 = [800,150,800]
node21 = [800,150,-400]
*/

nodeList = [node1,node2,node3,node4,node5,node6,node7,node8,node9,node10,node11,node12,node13,node14,node15,node16,node17,node18,node19,node20]


function drawLine(f, ff, t, tt) {
  ctx.beginPath();
	ctx.moveTo(f, ff);
	ctx.lineTo(t, tt);
	ctx.stroke();
}
function drawQuad(a,b,c,d,e,f,g,h){
  ctx.beginPath();
  ctx.moveTo(a, b);
  ctx.lineTo(c,d);
  ctx.lineTo(e, f);
  ctx.lineTo(g, h);
  ctx.closePath();
  ctx.fill();
}
function text(){
  ctx.font = '15px Arial'

  /*
  ctx.fillText(node1[0],-690,-290)
  ctx.fillText(node1[1],-690,-280)
  ctx.fillText(node1[2],-690,-270)
  ctx.fillText(node3[0],-500,-290)
  ctx.fillText(node3[1],-500,-280)
  ctx.fillText(node3[2],-500,-270)
  ctx.fillText(node2[0],-690,-240)
  ctx.fillText(node2[1],-690,-230)
  ctx.fillText(node2[2],-690,-220)
  ctx.fillText(node4[0],-500,-240)
  ctx.fillText(node4[1],-500,-230)
  ctx.fillText(node4[2],-500,-220)*/
  /*
  for (i = 0;i < nodeList.length;i++){
    ctx.fillText(i + 1,nodeList[i][0],nodeList[i][1])
  }*/

}
function draw2(){
  ctx.strokeStyle = 'goldenrod';
  ctx.lineWidth =4;

  lines()
  ctx.fillStyle = 'red';
  /*
  for (i = 0;i < nodeList.length;i++){
  ctx.fillStyle = 'blue';
  ctx.fillRect(nodeList[i][0] - 5 + canvas.width/2,nodeList[i][1] - 5-y,10,10)
  }
  */
  ctx.strokeStyle = 'lawngreen';
  ctx.lineWidth = 1;
  
  ctx.fillStyle = 'red';
  
;}
function lines(){
 
  
  ctx.fillStyle = 'goldenrod';
  
  drawLine(nodeList[1][0]+canvas.width/2,nodeList[1][1]-y-34000,nodeList[3][0]+canvas.width/2,nodeList[3][1]-y-34000)
  drawLine(nodeList[3][0]+canvas.width/2,nodeList[3][1]-y-34000,nodeList[4][0]+canvas.width/2,nodeList[4][1]-y-34000)
  drawLine(nodeList[4][0]+canvas.width/2,nodeList[4][1]-y-34000,nodeList[19][0]+canvas.width/2,nodeList[19][1]-y-34000)
  drawLine(nodeList[11][0]+canvas.width/2,nodeList[11][1]-y-34000,nodeList[19][0]+canvas.width/2,nodeList[19][1]-y-34000)
  drawLine(nodeList[7][0]+canvas.width/2,nodeList[7][1]-y-34000,nodeList[16][0]+canvas.width/2,nodeList[16][1]-y-34000)
  drawLine(nodeList[9][0]+canvas.width/2,nodeList[9][1]-y-34000,nodeList[16][0]+canvas.width/2,nodeList[16][1]-y-34000)
  drawLine(nodeList[9][0]+canvas.width/2,nodeList[9][1]-y-34000,nodeList[15][0]+canvas.width/2,nodeList[15][1]-y-34000)
  drawLine(nodeList[12][0]+canvas.width/2,nodeList[12][1]-y-34000,nodeList[15][0]+canvas.width/2,nodeList[15][1]-y-34000)
  //drawLine(nodeList[12][0],nodeList[12][1],nodeList[13][0],nodeList[13][1])
  drawLine(nodeList[12][0]+canvas.width/2,nodeList[12][1]-y-34000,nodeList[11][0]+canvas.width/2,nodeList[11][1]-y-34000)
  drawLine(nodeList[1][0]+canvas.width/2,nodeList[1][1]-y-34000,nodeList[7][0]+canvas.width/2,nodeList[7][1]-y-34000)

  drawLine(nodeList[14][0]+canvas.width/2,nodeList[14][1]-y-34000,nodeList[8][0]+canvas.width/2,nodeList[8][1]-y-34000)
    drawLine(nodeList[14][0]+canvas.width/2,nodeList[14][1]-y-34000,nodeList[13][0]+canvas.width/2,nodeList[13][1]-y-34000)
 drawLine(nodeList[8][0]+canvas.width/2,nodeList[8][1]-y-34000,nodeList[17][0]+canvas.width/2,nodeList[17][1]-y-34000)
drawLine(nodeList[6][0]+canvas.width/2,nodeList[6][1]-y-34000,nodeList[17][0]+canvas.width/2,nodeList[17][1]-y-34000);
drawLine(nodeList[6][0]+canvas.width/2,nodeList[6][1]-y-34000,nodeList[0][0]+canvas.width/2,nodeList[0][1]-y-34000)
drawLine(nodeList[2][0]+canvas.width/2,nodeList[2][1]-y-34000,nodeList[0][0]+canvas.width/2,nodeList[0][1]-y-34000)  
drawLine(nodeList[2][0]+canvas.width/2,nodeList[2][1]-y-34000,nodeList[5][0]+canvas.width/2,nodeList[5][1]-y-34000)  

drawLine(nodeList[2][18]+canvas.width/2,nodeList[2][1]-y-34000,nodeList[18][0]+canvas.width/2,nodeList[5][1]-y-34000)    
drawLine(nodeList[2][18]+canvas.width/2,nodeList[2][1]-y-34000,nodeList[17][0]+canvas.width/2,nodeList[17][1]-y-34000)      
drawLine(nodeList[2][13]+canvas.width/2,nodeList[13][1]-y-34000,nodeList[17][0]+canvas.width/2,nodeList[17][1]-y-34000)   
drawLine(nodeList[2][13]+canvas.width/2,nodeList[13][1]-y-34000,nodeList[10][0]+canvas.width/2,nodeList[10][1]-y-34000)   
drawLine(nodeList[2][6]+canvas.width/2,nodeList[6][1]-y-34000,nodeList[10][0]+canvas.width/2,nodeList[10][1]-y-34000)   
drawLine(nodeList[18][0]+canvas.width/2,nodeList[18][1]-y-34000,nodeList[5][0]+canvas.width/2,nodeList[5][1]-y-34000)   

drawLine(nodeList[10][0]+canvas.width/2,nodeList[10][1]-y-34000,nodeList[13][0]+canvas.width/2,nodeList[13][1]-y-34000) 
drawLine(nodeList[18][0]+canvas.width/2,nodeList[18][1]-y-34000,nodeList[10][0]+canvas.width/2,nodeList[10][1]-y-34000)   

drawLine(nodeList[1][0]+canvas.width/2,nodeList[1][1]-y-34000,nodeList[0][0]+canvas.width/2,nodeList[0][1]-y-34000)   
drawLine(nodeList[2][0]+canvas.width/2,nodeList[2][1]-y-34000,nodeList[3][0]+canvas.width/2,nodeList[3][1]-y-34000)  
drawLine(nodeList[12][0]+canvas.width/2,nodeList[12][1]-y-34000,nodeList[13][0]+canvas.width/2,nodeList[13][1]-y-34000)  
drawLine(nodeList[14][0]+canvas.width/2,nodeList[14][1]-y-34000,nodeList[15][0]+canvas.width/2,nodeList[15][1]-y-34000)  
}
function input2(){
 
  rotateY((2 * (-Math.PI * 2 / 350)))
 
  
}
let xx,yy;
xx = 0
yy = 0
function rotateY(angle) {
  let sin = Math.sin(angle);
  let cos = Math.cos(angle);
  let x, z;
  
  for (i = 0;i < nodeList.length;i++){
    x = nodeList[i][0];
    z = nodeList[i][2];
    nodeList[i][0] = x * cos - z * sin;
    nodeList[i][2] = z * cos + x * sin;
  }
  
}
function rotateZ(angle) {
  let sin = Math.sin(angle);
  let cos = Math.cos(angle);
  let x, y;
  
  for (i = 0;i < nodeList.length;i++){
    x = nodeList[i][0];
    y = nodeList[i][1];
    nodeList[i][0] = x * cos - y * sin;
    nodeList[i][1] = y * cos + x * sin;
  }
}
function rotateX(angle) {
  let sin = Math.sin(angle);
  let cos = Math.cos(angle);
  let z, y;
  
  for (i = 0;i < nodeList.length;i++){
    z = nodeList[i][1];
    y = nodeList[i][2];
    nodeList[i][1] = z * cos - y * sin;
    nodeList[i][2] = y * cos + z * sin;
  }
  
}
function doFrameLoop2(){
 
  xx,yy = rotateAroundZ(1)
  
  //window.requestAnimationFrame(doFrameLoop2); 
}

