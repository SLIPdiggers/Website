//"use strict"; //modern js capability

let canvas = document.getElementById('video');
let canvas_width = document.getElementsByTagName('html')[0].clientWidth;
let	canvas_height = document.getElementsByTagName('html')[0].clientHeight;
let	canvas_centre = [canvas_width / 2, canvas_height / 2];
window.onresize = setCanvasSize();

let NUM_STARS = 20;
let TRAVEL_SPEED = 2;
let stars_array = [];

let r = 0;
let g = 0;
let b = 255;
let rgb_string = "";
let r_ascend = true;
let g_ascend = false;
let b_ascend = false;

function setCanvasSize(){
	canvas_width = document.getElementsByTagName('html')[0].clientWidth;
	canvas_height = document.getElementsByTagName('html')[0].clientHeight;
	canvas_centre = [canvas_width / 2, canvas_height / 2];
	canvas.width = canvas_width;
	canvas.height = canvas_height;
}

function run_script(){
	

	//use mocha for testing?
	
	setInterval(draw_overlay, 15);
	if (canvas.getContext) {
		
				
	}
}

class Star {
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


function draw_stars() {
	let ctx = canvas.getContext('2d');
	while (stars_array.length < NUM_STARS) {
		stars_array.push(new Star(Math.random * canvas_width, Math.random * canvas_height));
	}
	for (i = 0; i <= stars_array.length; i++) {
		if (stars_array[0].x_pos < 0 || stars_array[0].x_pos > canvas_width || stars_array[0].y_pos < 0 || stars_array[0].y_pos > canvas_height) stars_array.shift();
		(stars_array[i].position - stars_array[i].travel_angle) * stars_array.travel_speed;
		stars_array[i].travel_speed++;
		ctx.fillStyle = 'rgba(255, 255, 255, 255)';
		ctx.fillRect(stars_array[i].position[0], stars_array[i].position[1], 1, 1);
	}
}

function draw_static(ctx) {

	//fill background black - may be better to transparent!!
	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, canvas_width, canvas_height);
		
	for (let i = 0; i < (canvas_width>canvas_height?canvas_width:canvas_height)*10; i++) {
	let greyScale = Math.floor(Math.random()*255);
	ctx.fillStyle = `rgba(${greyScale}, ${greyScale}, ${greyScale}, 255)`;
	ctx.fillRect(Math.random() * canvas_width, Math.random() * canvas_height, 2, 2);
	}
}

function draw_overlay() {
	
	let ctx = canvas.getContext('2d');
	draw_static(ctx);
	

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

		
			if (r_ascend == true) {
				//alert('r_ascend true and r=' + r + ', g=' + g + ', b=' + b);
				r+=4;
				b-=4;
				if (r > 254) {
					r_ascend = false;
					g_ascend = true;
				}
			}
			if (g_ascend == true) {
				//alert('g_ascend true and r=' + r + ', g=' + g + ', b=' + b);
				g+=4;
				r-=4;
				if (g > 254) {
					g_ascend = false;
					b_ascend = true;
				}
			}
			if (b_ascend == true) {
				//alert('b_ascend true and r=' + r + ', g=' + g + ', b=' + b);
				b+=4;
				g-=4;
				if (b > 254) {
					b_ascend = false;
					r_ascend = true;
				}
			}


			ctx.font = "48px Impact";
			ctx.fillStyle = `rgb(${r},${g},${b})`;
			ctx.textAlign = "center";
			ctx.fillText("Under Construction", canvas_width / 2, canvas_height / 2);

			ctx.font = "10px Impact";
			ctx.fillStyle = `rgb(${r},${g},${b})`;
			ctx.textAlign = "rleft";
			ctx.fillText(`red: ${r}`, (canvas_width / 30) * 28, (canvas_height / 30) * 26);
			ctx.fillText(`green: ${g}`, (canvas_width / 30) * 28, (canvas_height / 30) * 27);
			ctx.fillText(`blue: ${b}`, (canvas_width / 30) * 28, (canvas_height / 30) * 28);

			ctx.beginPath();
			let bar_right = (canvas_width / 100) * 95;
			let bar_top = (canvas_height / 100) * 88;
			ctx.strokeStyle = 'white';
			ctx.lineWidth = 1;

			ctx.moveTo(bar_right, bar_top); //r bar
			ctx.lineTo(bar_right - (r / (canvas_width/200)), bar_top);
			ctx.closePath();

			ctx.moveTo(bar_right, (bar_top / 88) * 91.5); //g bar
			ctx.lineTo(bar_right - (g / (canvas_width / 200)), (bar_top / 88) * 91.5);
			ctx.closePath();

			ctx.moveTo(bar_right, (bar_top / 88) * 94.5); //b bar
			ctx.lineTo(bar_right - (b / (canvas_width / 200)), (bar_top / 88) * 94.5);
			ctx.closePath();

			ctx.stroke();
		
	}
	else alert("Canvas not supported by Browser");
}