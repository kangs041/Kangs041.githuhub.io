// touch events are very similar to mouse events


var gray = 0;

var setup = function() {
	createGraphics(1000, 1650);
	fill(255, 255, 0);
	noStroke();
    document.body.style.backgroundImage = "map.jpg";
		document.body.style.backgroundSize = "1000px 2000px";
};

var draw = function() {  // Empty draw() keeps the program running
};

var mouseReleased = function() {
	rect(mouseX, mouseY, 50, 50);
};
