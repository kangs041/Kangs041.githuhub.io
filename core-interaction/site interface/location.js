// touch events are very similar to mouse events


var gray = 0;

var setup = function() {
	createGraphics(1000, 2000);
	fill(255, 255, 0);
	noStroke();
    document.body.style.backgroundImage = "url('map.jpg')";
};

var draw = function() {  // Empty draw() keeps the program running
};

var mouseReleased = function() {
	rect(mouseX, mouseY, 50, 50);
};
