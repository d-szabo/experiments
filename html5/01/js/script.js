//turn the canvas into an object so we can apply methods on it 
var canvas = document.getElementById("mainCanvas");
//a "paintbrush" we can use to draw on the canvas
var context = canvas.getContext("2d");

//keys stored in an array so more keys can be pushed at one time
var keys = [];

var width = 600;
var height = 400;
var speed = 5;

//score variable will be written on canvas
var score = 0;

window.addEventListener("keydown", function(e){
	keys[e.keyCode] = true;
}, false);
window.addEventListener("keyup", function(e){
	delete keys[e.keyCode];
}, false);

/*
up:38, down:40, left:37, right:39
*/

//create the player
var player = {
	x: 200,
	y: 10,
	width: 20,
	height: 20
};

//create enemy (on a random spot)
var cube = {
	x: Math.random() * (width-20),
	y: Math.random() * (height-20),
	width: 20,
	height: 20
};

//the function that has to be refreshed frequently - update (logic) and render (graphic)
function game(){
	update();
	render();
}

function update(){
	if(keys[38]){
		player.y-=speed;
	}
	if(keys[39]){
		player.x+=speed;
	}
	if(keys[40]){
		player.y+=speed;
	}
	if(keys[37]){
		player.x-=speed;
	}

//player cannot leave the canvas
	if(player.x < 0){
		player.x=0;
	}
	if(player.y < 0){
		player.y=0;
	}
	if(player.x > width-player.width){
		player.x=width-player.width;
	}
	if(player.y > height-player.height){
		player.y=height-player.height;
	}

	if (collision(player, cube) == true){
		process();
	}
}

function render(){
	context.clearRect(0, 0, width, height);
	//rectangle: x,y,width,height
	context.fillStyle = "blue";
	context.fillRect(player.x,player.y,player.width,player.height);
	context.fillStyle = "red";
	context.fillRect(cube.x,cube.y,cube.width,cube.height);

	context.font = "bold 30px helvetica" 
	context.fillText(score,10,30);
}

function process(){
	score++;
	cube.x = Math.random() * (width-20);
	cube.y = Math.random() * (height-20);
}

//Collision detection
function collision(first, second){
	return !(first.x > second.x + second.width ||
				first.x + first.width < second.x ||
				first.y > second.y + second.height ||
				first.y + first.height < second.y);
}

//this one runs frequently
setInterval (function(){
	game();
}, 1000/30)

