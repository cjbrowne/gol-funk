document.addEventListener( "DOMContentLoaded", function() {

	var _ = require("lodash");
	var worldGenerator = require("./worldGenerator");
	var worldRenderer = require("./worldRenderer");
	var worldRunner = require("./worldRunner");

	var canvas = document.getElementById("gol-world");

	var gameOfLife = function (world) {
		console.log("life on ", world);
		worldRenderer.start(world, canvas);
		worldRunner.start(world);
	};

	gameOfLife(worldGenerator.generateWorld(120, 120));

}, false );