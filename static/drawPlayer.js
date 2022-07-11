const drawPlayer = (context, player) => {
	const image = document.getElementById('player');

	const playerX = player.positionX;
	const playerY = player.positionY;
	const angle = player.angle;

	context.beginPath();
	context.fillStyle = "red";
	context.font = "20px sans-serif";
	context.fillText(`Player ${player._name}`, playerX - 35, playerY - 50);
	context.closePath();

	context.beginPath();
	//context.rotate(1);
	context.drawImage(image, playerX, playerY);
	context.closePath();
	context.restore();
}