var render = function(world, ctx) {

	var _ = require("lodash");

	var width = world.length;
	var height = world[0].length;

	var cellWidth = ctx.canvas.width / width;
	var cellHeight = ctx.canvas.height / height;

	_.each(world, function(row, y) {
		_.each(row, function(cell, x) {
			ctx.fillStyle = cell.isAlive ? "white" : "black";
			ctx.fillRect(x * cellWidth, y * cellHeight, cellWidth, cellHeight);
		});
	});
	requestAnimationFrame(_.bind(render, null, world, ctx));
};

var startRendering = function(world, canvas) {
	render(world, canvas.getContext("2d"));
};

module.exports = {
	start: startRendering
};