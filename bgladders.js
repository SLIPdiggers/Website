
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

function run_script(){
	

	//use mocha for testing?
	
	setInterval(draw, 15);
	if (canvas.getContext) {
		
				
	}
}

function draw(){
	let ctx = canvas.getContext('2d');
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

		
	}
	else alert("Canvas not supported by Browser");
}