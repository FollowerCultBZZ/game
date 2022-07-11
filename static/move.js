const movement = {
	up: false,
	down: false,
	left: false,
	right: false,
}
let angle;
document.addEventListener("keydown", (event) => {
	switch (event.keyCode) {
		case 65: // A
			movement.left = true;
			break;
		case 87: // W
			movement.up = true;
			break;
		case 68: // D
			movement.right = true;
			break;
		case 83: // S
			movement.down = true;
			break;
	}
});

document.addEventListener("keyup", (event) => {
	switch (event.keyCode) {
		case 65: // A
			movement.left = false;
			break;
		case 87: // W
			movement.up = false;
			break;
		case 68: // D
			movement.right = false;
			break;
		case 83: // S
			movement.down = false;
			break;
	}
});
document.addEventListener("mousemove", e => {
	angle = angleTo(400, 300, e.clientX, e.clientY);
	console.log(angle);
})
setInterval(() => {
	socket.emit("movement", movement);
	socket.emit("angle", angle);
}, 1000 / 60);

function angleTo(x, y, x1, y1){
	return Math.atan2(y - y1, x - x1);
}
function radToDegress(rad){
	var degress = rad * 180 / win.Math.PI;
	if(degress < 0){
		return degress + 360;
	} else {
		return degress;
	}
}