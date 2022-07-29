//"use strict"; //modern js capability

/*  "In other words, capital-named constants are only used as aliases for “hard-coded” values." https://javascript.info/variables
	"Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}" https://javascript.info/types
	"in the C language and in Java it is called “char”. In JavaScript, there is no such type. There’s only one type: string " https://javascript.info/types
	"The typeof operator returns the type of the argument." https://javascript.info/types
	
*/
let fuzzy_timer = 300;
let grey_scale = 0;

let canvas = document.getElementById('video');
let canvas_width = document.getElementsByTagName('html')[0].clientWidth;
let	canvas_height = document.getElementsByTagName('html')[0].clientHeight;
let	canvas_centre = [canvas_width / 2, canvas_height / 2];
window.onresize = setCanvasSize();

function setCanvasSize(){
	canvas_width = document.getElementsByTagName('html')[0].clientWidth;
	canvas_height = document.getElementsByTagName('html')[0].clientHeight;
	canvas_centre = [canvas_width / 2, canvas_height / 2];
	canvas.width = canvas_width;
	canvas.height = canvas_height;
}

function run_script(){		//use mocha for testing?
	
	setInterval(draw_overlay, 15);
	if (canvas.getContext) {
		
				
	}
}

class AlphabetSprite {
	constructor(x_pos, y_pos) {
		if (x_pos > -1 && x_pos < canvas_width + 1) this.x_pos = x_pos;
		else this.x_pos = -1;
		if (y_pos > -1 && y_pos < canvas_height + 1) this.y_pos = y_pos;
		else this.y_pos = -1;
		
		this.position = [this.x_pos, this.y_pos];
		this.travel_angle = [canvas_centre - x_pos, canvas_centre - y_pos];
		this.travel_speed = 1;
	}
}

function draw_static(ctx) {

	//fill background black - may be better to transparent!!
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas_width, canvas_height);
	
	fuzzy_timer--;
	
	for (let i = 0; i < (canvas_width>canvas_height?canvas_width:canvas_height)*10; i++) {
	
	
	if (fuzzy_timer > 255){
	//	let greyScale = Math.floor(Math.random()*255);
		grey_scale = 255;
	}else{
		grey_scale = fuzzy_timer;
	}
	//ctx.fillStyle = `rgba(${greyScale}, ${greyScale}, ${greyScale}, 255)`;
	
	ctx.fillStyle = `rgba(${grey_scale}, ${grey_scale}, ${grey_scale}, 255)`;
	ctx.fillRect(Math.random() * canvas_width, Math.random() * canvas_height, 2, 2);
	}
}

function draw_overlay() {
	
	if(fuzzy_timer > 0){
		fuzzy_timer--;
	}
	
	let ctx = canvas.getContext('2d');
	if (fuzzy_timer > 0){
		draw_static(ctx);
	}

	if (canvas.getContext) {
		

		

		

		
		
		

		//Draw white border round screen
		ctx.beginPath();
		ctx.moveTo(20.5, 20.5);
		ctx.lineTo(canvas_width - 20.5, 20.5);
		ctx.lineTo(canvas_width - 20.5, canvas_height - 20.5);
		ctx.lineTo(20.5, canvas_height - 20.5);
		ctx.closePath();
		ctx.strokeStyle = 'white';
		ctx.lineWidth = 3;
		ctx.stroke();

			ctx.beginPath();
			let bar_right = (canvas_width / 100) * 95;
			let bar_top = (canvas_height / 100) * 88;
			ctx.strokeStyle = 'white';
			ctx.lineWidth = 1;

			ctx.stroke();
		
	}
	else alert("Canvas not supported by Browser");
}
